@extends('dashboard.master')
@section('content')
    



    <header class="page-header">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h1 class="separator">Resumen</h1>
               
            </div>
        </div>
    </header>
    
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="row m-0 col-border-xl">
                    <div class="col-md-12 col-lg-6 col-xl-3">
                        <div class="card-body">
                            <div class="icon-rounded icon-rounded-primary float-left m-r-20">
                                <i class="icon dripicons-graph-bar"></i>
                            </div>
                            <h5 class="card-title m-b-5 counter" data-count="5627">5,627</h5>
                            <h6 class="text-muted m-t-10">
                                Ventas este mes
                            </h6>
                            <div class="progress progress-active-sessions mt-4" style="height:7px;">
                                <div class="progress-bar bg-primary" role="progressbar" style="width: 72%;" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <small class="text-muted float-left m-t-5 mb-3">
                                Meta
                            </small>
                            <small class="text-muted float-right m-t-5 mb-3 counter append-percent" data-count="72">72</small>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6 col-xl-3">
                        <div class="card-body">
                            <div class="icon-rounded icon-rounded-accent float-left m-r-20">
                                <i class="icon dripicons-cart"></i>
                            </div>
                            <h5 class="card-title m-b-5 append-percent counter" data-count="67">67</h5>
                            <h6 class="text-muted m-t-10">
                               Ganancias
                            </h6>
                            <div class="progress progress-add-to-cart mt-4" style="height:7px;">
                                <div class="progress-bar bg-accent" role="progressbar" style="width: 67%;" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <small class="text-muted float-left m-t-5 mb-3">
                                Change
                            </small>
                            <small class="text-muted float-right m-t-5 mb-3 counter append-percent" data-count="67">67</small>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6 col-xl-3">
                        <div class="card-body">
                            <div class="icon-rounded icon-rounded-info float-left m-r-20">
                                <i class="icon dripicons-mail"></i>
                            </div>
                            <h5 class="card-title m-b-5 counter" data-count="337">337</h5>
                            <h6 class="text-muted m-t-10">
                                Comentarios
                            </h6>
                            <div class="progress progress-new-account mt-4" style="height:7px;">
                                <div class="progress-bar bg-info" role="progressbar" style="width: 83%;" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <small class="text-muted float-left m-t-5 mb-3">
                                Change
                            </small>
                            <small class="text-muted float-right m-t-5 mb-3 counter append-percent" data-count="83">83</small>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6 col-xl-3">
                        <div class="card-body">
                            <div class="icon-rounded icon-rounded-success float-left m-r-20">
                                <i class="la la-dollar f-w-600"></i>
                            </div>
                            <h5 class="card-title m-b-5 prepend-currency counter" data-count="37873">37,873</h5>
                            <h6 class="text-muted m-t-10">
                                Total Vendido
                            </h6>
                            <div class="progress progress-total-revenue mt-4" style="height:7px;">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 77%;" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <small class="text-muted float-left m-t-5 mb-3">
                                Change
                            </small>
                            <small class="text-muted float-right m-t-5 mb-3 counter append-percent" data-count="77">77</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-lg-12 col-xl-7">
            <div class="card">
                <div class="card-header">Recent Transactions
                    <ul class="actions top-right">
                        <li><a href="javascript:void(0)" data-q-action="card-expand"><i class="icon dripicons-expand-2"></i></a></li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <div id="recent-transaction-table_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                            <div class="row">
                                <div class="col-sm-12 col-md-6">
                                    <div class="dataTables_length" id="recent-transaction-table_length">
                                        <label>Show 
                                            <select name="recent-transaction-table_length" aria-controls="recent-transaction-table" class="form-control form-control-sm">
                                            <option value="10">10</option><option value="25">25</option>
                                            <option value="50">50</option><option value="100">100</option>
                                        </select> entries</label>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6"><div id="recent-transaction-table_filter" class="dataTables_filter">
                                    <label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="recent-transaction-table"></label>
                                </div>
                            </div>
                        </div>
                        <div class="row"><div class="col-sm-12">
                            <table id="recent-transaction-table" class="table table-striped table-bordered dataTable no-footer" style="width: 100%;" role="grid" aria-describedby="recent-transaction-table_info">
                            <thead>
                                <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="recent-transaction-table" rowspan="1" colspan="1" aria-sort="ascending" aria-label="TRANSACTION ID: activate to sort column descending" style="width: 160px;">TRANSACTION ID</th><th class="sorting" tabindex="0" aria-controls="recent-transaction-table" rowspan="1" colspan="1" aria-label="DATE: activate to sort column ascending" style="width: 65px;">DATE</th><th class="sorting" tabindex="0" aria-controls="recent-transaction-table" rowspan="1" colspan="1" aria-label="AMOUNT: activate to sort column ascending" style="width: 88px;">AMOUNT</th><th class="sorting" tabindex="0" aria-controls="recent-transaction-table" rowspan="1" colspan="1" aria-label="STATUS: activate to sort column ascending" style="width: 80px;">STATUS</th><th class="no-sort sorting_disabled" rowspan="1" colspan="1" aria-label="RECEIPT" style="width: 57px;">RECEIPT</th></tr>
                            </thead>
                            <tbody>
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                            <tr role="row" class="odd">
                                    <td class="sorting_1">440-23423</td>
                                    <td>06/25/18</td>
                                    <td>$650</td>
                                    <td><span class="badge badge-pill badge-warning">Pending</span></td>
                                    <td>
                                        <a href="javascript:void(0)"><i class="icon dripicons-download"></i></a>
                                    </td>
                                </tr><tr role="row" class="even">
                                    <td class="sorting_1">440-23423</td>
                                    <td>06/25/18</td>
                                    <td>$550</td>
                                    <td><span class="badge badge-pill badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0)"><i class="icon dripicons-download"></i></a>
                                    </td>
                                </tr><tr role="row" class="odd">
                                    <td class="sorting_1">440-23423</td>
                                    <td>06/23/18</td>
                                    <td>$830</td>
                                    <td><span class="badge badge-pill badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0)"><i class="icon dripicons-download"></i></a>
                                    </td>
                                </tr><tr role="row" class="even">
                                    <td class="sorting_1">440-23434</td>
                                    <td>06/23/18</td>
                                    <td>$900</td>
                                    <td><span class="badge badge-pill badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0)"><i class="icon dripicons-download"></i></a>
                                    </td>
                                </tr><tr role="row" class="odd">
                                    <td class="sorting_1">440-23444</td>
                                    <td>06/24/18</td>
                                    <td>$950</td>
                                    <td><span class="badge badge-pill badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0)"><i class="icon dripicons-download"></i></a>
                                    </td>
                                </tr><tr role="row" class="even">
                                    <td class="sorting_1">440-243453</td>
                                    <td>06/24/18</td>
                                    <td>$250</td>
                                    <td><span class="badge badge-pill badge-warning">Pending</span></td>
                                    <td>
                                        <a href="javascript:void(0)"><i class="icon dripicons-download"></i></a>
                                    </td>
                                </tr><tr role="row" class="odd">
                                    <td class="sorting_1">440-29384</td>
                                    <td>06/25/18</td>
                                    <td>$550</td>
                                    <td><span class="badge badge-pill badge-warning">Pending</span></td>
                                    <td>
                                        <a href="javascript:void(0)"><i class="icon dripicons-download"></i></a>
                                    </td>
                                </tr><tr role="row" class="even">
                                    <td class="sorting_1">440-343535</td>
                                    <td>06/19/18</td>
                                    <td>$350</td>
                                    <td><span class="badge badge-pill badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0)"><i class="icon dripicons-download"></i></a>
                                    </td>
                                </tr><tr role="row" class="odd">
                                    <td class="sorting_1">440-34533</td>
                                    <td>06/21/18</td>
                                    <td>$5,300</td>
                                    <td><span class="badge badge-pill badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0)"><i class="icon dripicons-download"></i></a>
                                    </td>
                                </tr><tr role="row" class="even">
                                    <td class="sorting_1">440-3456467</td>
                                    <td>06/15/18</td>
                                    <td>$650</td>
                                    <td><span class="badge badge-pill badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0)"><i class="icon dripicons-download"></i></a>
                                    </td>
                                </tr></tbody>
                        </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="recent-transaction-table_info" role="status" aria-live="polite">Showing 1 to 10 of 24 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="recent-transaction-table_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="recent-transaction-table_previous"><a href="#" aria-controls="recent-transaction-table" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="recent-transaction-table" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="recent-transaction-table" data-dt-idx="2" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item "><a href="#" aria-controls="recent-transaction-table" data-dt-idx="3" tabindex="0" class="page-link">3</a></li><li class="paginate_button page-item next" id="recent-transaction-table_next"><a href="#" aria-controls="recent-transaction-table" data-dt-idx="4" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12 col-xl-5">
            <div class="card">
                <div class="card-header"><span class="m-t-10 d-inline-block">Employee Report</span>
                    <ul class="nav nav-pills nav-pills-primary float-right" id="pills-demo-sales" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-month-tab" data-toggle="tab" href="#sales-month-tab" role="tab">Month</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-year-tab" data-toggle="tab" href="#sales-year-tab" role="tab">Year</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body p-0">
                    <div class="tab-content" id="pills-tabContent-sales">
                        <div class="tab-pane fade show active" id="sales-month-tab" role="tabpanel" aria-labelledby="sales-month-tab">
                            <table class="table v-align-middle">
                                <thead class="bg-light">
                                    <tr>
                                        <th class="p-l-20">Name</th>
                                        <th>Earnings</th>
                                        <th>Quota</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img class="align-self-center mr-3 ml-2 w-50 rounded-circle" src="../assets/img/avatars/27.jpg" alt="">
                                            <strong class="nowrap">Robert Norris</strong>
                                        </td>
                                        <td>$37,000</td>
                                        <td><span class="badge badge-pill badge-success">Above</span></td>
                                    </tr>
                                    <tr>
                                        <td><img class="align-self-center mr-3 ml-2 w-50 rounded-circle" src="../assets/img/avatars/47.jpg" alt="">
                                            <strong class="nowrap">Shawna Cohen</strong></td>
                                            <td>$27,600</td>
                                            <td><span class="badge badge-pill badge-info">Met</span></td>
                                        </tr>
                                        <tr>
                                            <td><img class="align-self-center mr-3 ml-2 w-50 rounded-circle" src="../assets/img/avatars/24.jpg" alt="">
                                                <strong class="nowrap">Darrin Todd</strong></td>
                                                <td>$23,200</td>

                                                <td><span class="badge badge-pill badge-info">Met</span></td>
                                            </tr>
                                            <tr>
                                                <td><img class="align-self-center mr-3 ml-2 w-50 rounded-circle" src="../assets/img/avatars/01.jpg" alt="">
                                                    <strong class="nowrap">Michelle White</strong></td>
                                                    <td>$19,300</td>

                                                    <td><span class="badge badge-pill badge-info">Met</span></td>
                                                </tr>
                                                <tr>
                                                    <td><img class="align-self-center mr-3 ml-2 w-50 rounded-circle" src="../assets/img/avatars/09.jpg" alt="">
                                                        <strong class="nowrap">Josh Lynch</strong></td>
                                                        <td>$18,500</td>
                                                        <td><span class="badge badge-pill badge-warning">Pending</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><img class="align-self-center mr-3 ml-2 w-50 rounded-circle" src="../assets/img/avatars/26.jpg" alt="">
                                                            <strong class="nowrap">Jason Kendall</strong></td>
                                                            <td>$16,300</td>
                                                            <td><span class="badge badge-pill badge-warning">Pending</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><img class="align-self-center mr-3 ml-2 w-50 rounded-circle" src="../assets/img/avatars/11.jpg" alt="">
                                                                <strong class="nowrap">Aaron	Elliott</strong></td>
                                                                <td>$8,300</td>
                                                                <td><span class="badge badge-pill badge-danger">Danger</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="border-none"><img class="align-self-center mr-3 ml-2 w-50 rounded-circle" src="../assets/img/avatars/21.jpg" alt="">
                                                                    <strong class="nowrap">Rebecca Harris</strong></td>
                                                                    <td class="border-none">$4,000</td>
                                                                    <td class="border-none"><span class="badge badge-pill badge-danger">Danger</span> </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="tab-pane fade" id="sales-year-tab" role="tabpanel" aria-labelledby="sales-year-tab">
                                                        <table class="table v-align-middle">
                                                            <thead class="bg-light">
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Earnings</th>
                                                                    <th>Quota</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><img class="align-self-center mr-3 ml-2 w-50 rounded-circle" src="../assets/img/avatars/02.jpg" alt="">
                                                                        <strong class="nowrap">Mike Jones </strong>
                                                                    </td>
                                                                    <td>$587,000</td>
                                                                    <td><span class="badge badge-pill badge-success">Above</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><img class="align-self-center mr-3 ml-2 w-50 rounded-circle" src="../assets/img/avatars/6.jpg" alt="">
                                                                        <strong class="nowrap">Leslie	Chapman</strong></td>
                                                                        <td>$427,600</td>
                                                                        <td><span class="badge badge-pill badge-success">Above</span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img class="align-self-center mr-3 ml-2 w-50 rounded-circle" src="../assets/img/avatars/7.jpg" alt="">
                                                                            <strong class="nowrap">Taylor Collier</strong></td>
                                                                            <td>$323,200</td>

                                                                            <td><span class="badge badge-pill badge-success">Above</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><img class="align-self-center mr-3 ml-2 w-50 rounded-circle" src="../assets/img/avatars/35.jpg" alt="">
                                                                                <strong class="nowrap">Dominic Shaw</strong></td>
                                                                                <td>$321,000</td>

                                                                                <td><span class="badge badge-pill badge-info">Met</span></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><img class="align-self-center mr-3 ml-2 w-50 rounded-circle" src="../assets/img/avatars/38.jpg" alt="">
                                                                                    <strong class="nowrap">Josh Lynch</strong></td>
                                                                                    <td>$293,500</td>
                                                                                    <td><span class="badge badge-pill badge-warning">Pending</span></td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td><img class="align-self-center mr-3 ml-2 w-50 rounded-circle" src="../assets/img/avatars/30.jpg" alt="">
                                                                                        <strong class="nowrap">Angelo	Parker</strong></td>
                                                                                        <td>$87,300</td>
                                                                                        <td><span class="badge badge-pill badge-danger">Danger</span> </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


@endsection