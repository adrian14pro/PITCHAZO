/* =========================
   INTERACTIVE PITCH
========================= */

const pitch = document.querySelector(".pitch");

if(pitch){

    pitch.addEventListener("mousemove", function(e){

        const rect = pitch.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        const rotateX =
            ((centerY - y) / centerY) * 5;

        pitch.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    pitch.addEventListener("mouseleave", function(){

        pitch.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg)";

    });

}
