new Vue({
    el: "#wrapper",
    data: {
        datas: null
    },
    // 所有元素顯示後執行
    // Vue 實體上的設置已經安裝上模板，這時的 $el 是已經藉由實體中的定義渲染而成的真正的頁面。
    mounted() {
        // 新增 XML 物件
        var xhr = new XMLHttpRequest();
        // 開啟 JSON 資料
        xhr.open("GET","./datas.json");
        // 傳送需求並取得資料
        xhr.send();
        // 載入完成後  () => {}  =  function() {}
        xhr.onload = () => {
            // 將 JSON 資料資料轉為物件
            var obj = JSON.parse(xhr.responseText);
            this.datas = obj.result.records;
            console.log(this.datas);
        }
    }
});
// console.log("!!!");