var VOD_Controller = function() {
    this.place_list = new Array();

    /**
     * 店舗を追加する
     * @param id
     * @param name
     */
    this.addPlace = function(id, name) {
        this.place_list[id] = [id, name];
    }

    /**
     * 店舗を取得する
     * @param id
     * @returns {(*|void|string)[]|null}
     */
    this.getPlace = function(id) {
        if (this.place_list[id]) {
            return this.place_list[id] = [id, name];
        } else {
            return null;
        }
    }

    /**
     * イベントを実行する
     * @param params
     */
    this.doEvent = function(params) {
        console.log(params);
        if (params.object.includes('information')) {
            Dialog_open(params.object, params.player);
        }
    }
}

var vod_controller = new VOD_Controller();
