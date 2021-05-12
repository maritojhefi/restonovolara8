<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class QrController extends Controller
{
    public function createqr(){
       return QrCode::format('png')->size(300)->generate('www.restonovo.site','public/qrcode/qrmesa.png');
    }
}
