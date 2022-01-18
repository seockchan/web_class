//결과보기 버튼을 클릭하면 경고창을 띄워주세요
document.querySelectorAll(".result").forEach(function(el){
    el.addEventListener("click", function(){
        document.querySelectorAll(".result > .result").forEach(function(ele){
            el.display;
        });
    });
});
