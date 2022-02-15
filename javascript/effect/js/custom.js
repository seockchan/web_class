//modal
const modal = function(){
    //버튼을 클릭하면 modal창을 보이게 해주세요.
    document.querySelector(".source-btn").addEventListener("click",()=>{
        document.querySelector("#modal").classList.add("show");
        document.querySelector("#modal").classList.remove("hide");
    })
    
    //닫기 버튼을 클릭하면 없애주세요.
    document.querySelector(".modal-close").addEventListener("click",()=>{
        document.querySelector("#modal").classList.add("hide");
        
    })
}

//tab menu
const tabMenu = function(){
    const tabBtn = document.querySelectorAll(".view-title > ul > li");
    const tabCont = document.querySelectorAll(".view-cont > div");

    //각각의 버튼을 클릭하면 경고창
    tabBtn.forEach((btn, index)=>{
        btn.addEventListener("click",()=>{
            //내가 클릭하지 않은 건 active 삭제 모든 클래스 active삭제
            tabBtn.forEach((el)=>{
                el.classList.remove("active");
            });
           
            //내가 클릭한건 active추가
            btn.classList.add("active");

            //모든 컨텐츠 박스 안보이게~
            tabCont.forEach((el)=>{
                el.style.display="none";
            });
            //내가 클릭한 컨텐츠 박스를 보이게
            tabCont[index].style.display="block";

            });
        })
    }

// highlight
const highlight =function(){
    hljs.highlightAll();
}

    
