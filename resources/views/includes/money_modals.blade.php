<div class="modal fade" id="basicModal-select_fuel_orders" tabindex="-1" role="dialog" aria-labelledby="basicModal-select_fuel_orders" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">Fuel options</h4>
            </div>
            <div class="modal-body">
                <div class="buttons">
                    <label class="ola">
                        <input type="radio" id="check1" name="ohradio" checked>Ολα
                    </label>
                    <label class="kinisi">
                        <input type="radio" id="check2" name="ohradio">Κινηση
                    </label>
                    <label class="thermansi">
                        <input type="radio" id="check3" name="ohradio">Θερμανση
                    </label>
                </div>
                  <select id="firstDropdown" class="">
                    <optgroup>
                        <option>------</option>
                        <option>Diesel Θέρμανσης</option>
                        <option>Diesel Θέρμανσης 500-1000 lt</option>
                        <option>Diesel Θέρμανσης  &lt;500 lt</option>
                        <option>Diesel Θέρμανσης &gt;1000 lt</option>
                        <option>Diesel Κίνησης</option>
                        <option>Super</option>
                        <option>Αμόλυβδη 100</option>
                        <option>Αμόλυβδη 95</option>
                        <option>Αμόλυβδη 95 V-Power</option>
                        <option>Υγραέριο Κίνησης</option>
                    </optgroup>
                  </select>
                  <select id="secondDropdown" class="myHide">
                    <optgroup>
                        <option>------</option>
                        <option>Diesel Θέρμανσης</option>
                        <option>Diesel Θέρμανσης 500-1000 lt</option>
                        <option>Diesel Θέρμανσης  &lt;500 lt</option>
                        <option>Diesel Θέρμανσης &gt;1000 lt</option>
                    </optgroup>
                  </select>
                  <select id="thirdDropdown" class="myHide">
                    <optgroup>
                        <option>------</option>
                        <option>Diesel Κίνησης</option>
                        <option>Super</option>
                        <option>Αμόλυβδη 100</option>
                        <option>Αμόλυβδη 95</option>
                        <option>Αμόλυβδη 95 V-Power</option>
                        <option>Υγραέριο Κίνησης</option>
                    </optgroup>
                  </select>
                <div class="money">
                    <label class="xrimata">
                        <button type="submit">Χρηματα</button>
                    </label>
                    <label class="litra">
                        <button type="submit">Λιτρα</button>
                    </label>
                    <br>
                    <input class="input_posotita" type="number" min="0.01" max="100000" step="0.01">
                    <div class="monada"></div>
                    <button class="submit_btn" type="submit">Submit</button>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>