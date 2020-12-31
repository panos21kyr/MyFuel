<!DOCTYPE html>
<html>
    <head>
        <title>{{env('APP_NAME')}}</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <link href="{{ asset('css/style.css') }}" rel="stylesheet">
        <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key={{config('googlemap')['map_apikey']}}&callback=initMap&libraries=&v=weekly" defer ></script>
        <script type="text/javascript" src="{{asset('js/googlemap.js') }}"></script>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key={{config('googlemap')['map_apikey']}}&callback=initMap&libraries=&v=weekly" defer ></script>
        <script type="text/javascript" src="{{asset('js/googlemap.js') }}"></script>
    </head>
    <body>
      @include('includes.navs.guest_nav')
      {{-- map --}}
      <div id="map"></div>
      {{-- modals --}}
      <div class="modal fade" id="basicModal-login" tabindex="-1" role="dialog" aria-labelledby="basicModal-login" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">Log in</h4>
                </div>
                <div class="modal-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="form-group">
                          <label for="uname">Username:</label>
                          <input type="text" class="form-control" id="name" placeholder="Enter username" name="name" required>
                          <div class="valid-feedback">Valid.</div>
                          <div class="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div class="form-group">
                          <label for="pwd">Password:</label>
                          <input type="password" class="form-control" id="password" placeholder="Enter password" name="password" required>
                          <div class="valid-feedback">Valid.</div>
                          <div class="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="basicModal-register" tabindex="-1" role="dialog" aria-labelledby="basicModal-register" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">Log in</h4>
                </div>
                <div class="modal-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf
                        <div class="form-group">
                          <label for="uname">Username:</label>
                          <input type="text" class="form-control" id="name" placeholder="Enter username" name="name" required>
                          <div class="valid-feedback">Valid.</div>
                          <div class="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div class="form-group">
                          <label for="pwd">Password:</label>
                          <input type="password" class="form-control" id="password" placeholder="Enter password" name="password" required>
                          <div class="valid-feedback">Valid.</div>
                          <div class="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div class="form-group">
                            <label for="uemail">email:</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required>
                            <div class="valid-feedback">Valid.</div>
                            <div class="invalid-feedback">Please fill out this field.</div>
                          </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="basicModal-orders" tabindex="-1" role="dialog" aria-labelledby="basicModal-orders" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h4 class="modal-title" id="myModalLabel">orders</h4>
              </div>
              <div class="modal-body">
                  <h2>order 1</h2>
                  <h2>order 1</h2>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
          </div>
      </div>
  </div>
  {{-- modals --}}
      <footer class="bg-light text-center text-lg-start">
          <!-- Copyright -->
          <div class="text-center p-3">
            © 2020 Copyright:
            <a class="text-dark" href="www.Myfuel.com">www.Myfuel.com</a>
          </div>
          <!-- Copyright -->
        </footer>
    </body>
</html>