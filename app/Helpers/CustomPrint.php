<?php

namespace App\Helpers;

use Rawilk\Printing\Facades\Printing;
use Rawilk\Printing\Receipts\ReceiptPrinter;


class CustomPrint{

    static function imprimir($lista)
    {
         //Imprimir con api en red
        $receiptPrinterId=70259292;
      

        // Enviar lo anterior a la impresora mediante api
        Printing::newPrintTask()
        ->printer($receiptPrinterId)
        ->content($lista)
        ->send();
    }
}