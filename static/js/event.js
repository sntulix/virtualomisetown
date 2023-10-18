/**
 * プレイヤーをお店に入れる
 * @param shop_id
 * @param player_id
 * @constructor
 */
function Event_enterShop(shop_id, player_id) {
    console.log("Player " + player_id + " has entered shop " + shop_id);
    Shop_open(shop_id, player_id);
}
