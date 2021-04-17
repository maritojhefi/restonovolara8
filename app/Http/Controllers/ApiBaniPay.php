<?php 

    class Transaction {

        public $transaction = array();

        // Affiliate Code: 141581ae-fb1f-4cfb-b21e-040a8851c265
        private $affiliateCode = "141581ae-fb1f-4cfb-b21e-040a8851c265";
        private $expireMinutes = 20;
        private $failedUrl = "url-failed";
        private $notificationUrl = "url-notification";
        
        private $paymentMethd = "TIGO_MONEY";

        private $const = array();

        private $payload = array();

        private $transactionGenerated = array();
        private $transactionStatus = array();

        private $urlTransaction = "https://banipay.me:8443/api/payments/transaction";


        // array keys required
        private $keys = array("withInvoice", "externalCode", "paymentDescription", "details");
        
        public function __construct($data){
            $this->transaction = $data;
            $this->const = array(
                "affiliateCode"   => $this->affiliateCode,
                "expireMinutes"   => $this->expireMinutes,
                "failedUrl"       => $this->failedUrl,
                "notificationUrl" => $this->notificationUrl
            );
        }

        public function register (){
            if( self::verify() ) {
                // return "Verificado " . self::$affiliateCode;
                $data = self::toComplete();
                return self::send();
            } else {
                return "Incorrectly formatted data";
            }
        }

        private function verify() {
            if (is_array($this->transaction)) {
                foreach ($this->keys as $key => $value) {
                    if ( !array_key_exists($value, $this->transaction) ) return false;
                }
                return true;
            } else {
                return false;
            } 
        }

        private function toComplete(){
            $this->payload = $this->const + $this->transaction;
            return $this->payload;
        }

        public function getPayload(){
            return json_encode($this->payload);
        }

        private function send(){
            $ch = curl_init($this->urlTransaction);
            $payload = self::getPayload();

            // Attach encoded JSON string to the POST fields
            curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

            // Set the content type to application/json
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));

            // Return response instead of outputting
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            // Execute the POST request
            $this->transactionGenerated = json_decode(curl_exec($ch));

            // Close cURL resource
            curl_close($ch);

            return $this->transactionGenerated;
        }

        public function getTransaction (){

            $ch = curl_init("{$this->urlTransaction}/{$this->transactionGenerated->paymentId}/{$this->transactionGenerated->transactionGenerated}/{$this->paymentMethd}");

            // Return response instead of outputting
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            // Execute the POST request
            $this->transactionStatus = json_decode(curl_exec($ch));

            // Close cURL resource
            curl_close($ch);

            return $this->transactionStatus;
        }

    }

   
    
    // Products & services
    $details = array(
        array(
            "concept"         => "Servicio de Luz",
            "productImageUrl" => "https://images.pexels.com/photos/132340/pexels-photo-132340.jpeg",
            "quantity"        => 1,
            "unitPrice"       => 100,
        ),
        array(
            "concept"         => "Servicio de Agua",
            "productImageUrl" => "https://images.pexels.com/photos/861414/pexels-photo-861414.jpeg",
            "quantity"        => 1,
            "unitPrice"       => 101,
        )
    );    

    // Transaction
    $data = array(
        "withInvoice"        => false,
        "externalCode"       => "1234",
        "paymentDescription" => "Pago de Servicios",
        "reserved1"          => "string_1",
        "reserved2"          => "string_2",
        "reserved3"          => "string_3",
        "reserved4"          => "string_4",
        "reserved5"          => "string_5",
        "details"            => $details
    );


    $newData = new Transaction($data);

    // Register Transaction
    echo "<pre>";
    print_r($newData->register());
    echo "</pre>";
    
    echo "<br>";
    
    // Get Transaction
    echo "<pre>";
    print_r($newData->getTransaction());
    echo "</pre>";

?>