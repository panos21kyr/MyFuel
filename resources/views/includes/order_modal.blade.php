
<div class="modal fade" id="basicModal-order" tabindex="-1" role="dialog" aria-labelledby="basicModal-order" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">Prices</h4>
            </div>          
            <div class="modal-body">
                <div id="price_list">
                </div>
                <div class="input-group" id="last">
                    <div class="input-group mb-3">
                        <form>
                            <label for="fuel">fuel</label><br>
                            <input type="text" id="fuel" name="fuel" value="choose"><br>
                            <label for="lt">lt</label><br>
                            <input type="number" id="lt" name="lt" min="1" max="100" value="0">
                          </form>
                    </div>
                    <div class="input-group-append">
                        <button class="btn btn-info" type="button" data-dismiss="modal" value="getFuels" onclick="orderFuel(globalJson,`{{ Auth::user()->username }}`)">order</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal" onclick="removePriceList()">Close</button>
            </div>
        </div>
    </div>
</div>
