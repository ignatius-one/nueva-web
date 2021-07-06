
Swal.fire({
  title: 'Welcome to my firsts page web.',
  text: 'I hope you like it.',
  width: 600,
  padding: '3em',
  background: 'rgb(0,0,0) url(/images/trees.png)',
  backdrop: `
    rgba(0,0,0,0.6)
    url('https://ugc.kn3.net/i/760x/http://www.nyan.cat/cats/fiesta.gif')
    left top
    no-repeat
    `,
    confirmButtonColor: '#000000',
  
})

window.sr = ScrollReveal();
sr.reveal('.containerMayor', {
    duration: 3000,
    oring: 'botton',
    distance:'-100px'
});
sr.reveal('.footer', {
    duration: 3000,
    oring: 'botton',
    distance:'-100px'
});

document.getElementById('not').addEventListener('click',()=> {
    Swal.fire({
        title: '<pan class="textalert">Error :/</pan>',
        html: `<span class="textalert">not avalible</span>`,
        icon: 'error',
        background:'#f7df1e',
        confirmButtonColor: '#000000',
	    timer: 7000,
    }
    )
})

// date year ------------------
document.getElementById('dateyear').innerHTML = new Date().getFullYear()