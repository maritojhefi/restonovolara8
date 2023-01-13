<?php

namespace App\Helpers;


use App\Events\Mensaje;
use App\Printer_device;
use Rawilk\Printing\Facades\Printing;
use Rawilk\Printing\Receipts\ReceiptPrinter;


class CustomPrint {

    
    static function imprimir($lista)
    {
         //Imprimir con api en red
        $printeractive= Printer_device::find(1);
       
       
            $receiptPrinterId=$printeractive->id_impresora;
         // Enviar lo anterior a la impresora mediante api
           Printing::newPrintTask()
           ->printer($receiptPrinterId)
           ->content($lista)
           ->send();
       
      

       
    }

    static function EcoCanal()
    {
        event(new Mensaje('actualizar'));
    }
}