<div class="modal fade" id="basicModal-select_fuel" tabindex="-1" role="dialog" aria-labelledby="basicModal-select_fuel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">Fuel options</h4>
            </div>
            <div class="modal-body">
                <div class="input-group">
                    <select id="dropDown" class="custom-select">
                        <optgroup>
                            <option>Θερμανση</option>
                            <option>Diesel Θέρμανσης</option>
                            <option>Diesel Θέρμανσης 500-1000 lt</option>
                            <option>Diesel Θέρμανσης  &lt;500 lt</option>
                            <option>Diesel Θέρμανσης &gt;1000 lt</option>
                            <option>Κινηση</option>
                            <option>Diesel Κίνησης</option>
                            <option>Super</option>
                            <option>Αμόλυβδη 100</option>
                            <option>Αμόλυβδη 95</option>
                            <option>Αμόλυβδη 95 V-Power</option>
                            <option>Υγραέριο Κίνησης</option>
                        </optgroup>
                    </select>
                    <div class="input-group-append">
                        <button class="btn btn-info" type="button" data-dismiss="modal" value="getFuels" onclick="getFuels()">fuels</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>