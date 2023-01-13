<?php

namespace App\Http\Controllers;

use stdClass;
use SoapClient;
use SimpleXMLElement;
use Illuminate\Http\Request;
use RicorocksDigitalAgency\Soap\Facades\Soap;

class PruebasController extends Controller
{
    public function pruebaImpuestos()
    {
        $url = 'https://secure.softwarekey.com/solo/webservices/XmlCustomerService.asmx?WSDL';
        $client = new SoapClient($url);
        $xmlr = new SimpleXMLElement("<CustomerSearch></CustomerSearch>");
        $xmlr->addChild('AuthorID', 1);
        $xmlr->addChild('UserID', 'mchojrin');
        $xmlr->addChild('UserPassword', '1234');
        $xmlr->addChild('Email', 'mauro.chojrin@leewayweb.com');
       
        $params = new stdClass();
        $params->xml = $xmlr->asXML();
        dd($xmlr->asXML()); // OJO: La propiedad xml es particular de este WebService, debes reemplazarla por el nombre del parámetro que espera recibir el servicio al que buscas conectarte
        $result = new SimpleXMLElement($client->CustomerSearchS($params)->CustomerSearchSResult->any);
        $r = current($result->xpath('/Customers/ResultCode'));
        if ( $r == '-1' ) {
                echo 'Fallo: '.$result->xpath('/Customers/ErrorMessage')[0];
        } else {
                echo 'Exito!';
        }
        echo PHP_EOL;
        
    }
}
