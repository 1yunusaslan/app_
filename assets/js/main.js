const data = {

     eng:{
          navbar :{
               a:[
                    {
                         name: 'contact',
                         href: './pages/contact.html'
                    },
                    {
                         name: 'articles',
                         href: './pages/articles.html'
                    }
               ],
               selection:[
                    {
                         name:'TR',
                         value:'turkce'                   
                    },
                    {
                         name:'ENG',
                         value:'english'                   
                    },
               ]
          },
     
          content: {
               img:[
                    {
                         src:'./assets/img/mypic_png.png'
                    }
               ],
               main:[
                    {
                         tittle:'Yunus Aslan',
                         subtittle:'Front-End Developer',
                         about:'I am a junior developer for web and mobile applications. Eager to learn the new technologies, and excited to get web fundementals. I have a passion to improve my self. Currently based in the great city of Istanbul, Turkey.'
                    }
               ]
          },
     
          footer: {
               outside_a:[
                    {
                         name:'developed by @yunusaslan',
                         href:'/',
                         class:'link'
                    }
               ],
               inside_a:[
                    {
                         name:'Twitter',
                         href:'https://twitter.com/yonaharieh',
                         class:'link'
                    },
                    {
                         name:'Instagram',
                         href:'https://www.instagram.com/yonaharieh/',
                         class:'link'
                    },
                    {
                         name:'GitHub',
                         href:'https://twitter.com/yonaharieh',
                         class:'link'
                    },
                    {
                         name:'Twitter',
                         href:'https://www.linkedin.com/in/yunusemreaslan1/',
                         class:'link'
                    }
               ]
          }
     },

     tr:{
          navbar :{
               a:[
                    {
                         name: 'iletisim',
                         href: './pages/contact.html'
                    },
                    {
                         name: 'makaleler',
                         href: './pages/articles.html'
                    }
               ],
               selection:[
                    {
                         name:'TR',
                         value:'turkce'                   
                    },
                    {
                         name:'ENG',
                         value:'english'                   
                    },
               ]
          },
     
          content: {
               img:[
                    {
                         src:'./assets/img/mypic_png.png'
                    }
               ],
               main:[
                    {
                         tittle:'Yunus Aslan',
                         subtittle:'Ön Yüz Geliştiricisi',
                         about:'Web ve mobil uygulamalar konusunda genç bir geliştiriciyim. Yeni teknolojileri öğrenmeye istekli ve web ile ilgili temel bilgileri edinme konusunda heyecanlı. Kendimi geliştirme tutkum var. Şu an da İstanbulda yaşıyorum.'
                    }
               ]
          },
     
          footer: {
               outside_a:[
                    {
                         name:'@yunusaslan tarafından geliştirildi',
                         href:'/',
                         class:'link'
                    }
               ],
               inside_a:[
                    {
                         name:'Twitter',
                         href:'https://twitter.com/yonaharieh',
                         class:'link'
                    },
                    {
                         name:'Instagram',
                         href:'https://www.instagram.com/yonaharieh/',
                         class:'link'
                    },
                    {
                         name:'GitHub',
                         href:'https://twitter.com/yonaharieh',
                         class:'link'
                    },
                    {
                         name:'Twitter',
                         href:'https://www.linkedin.com/in/yunusemreaslan1/',
                         class:'link'
                    }
               ]
          }

     }
     


}


const container = document.getElementById('container');

const nav = document.getElementById('link-container');
const navcontainer = document.getElementById('nav-container');

nav.className= 'link-container';
navcontainer.className = 'nav-container';
container.className = 'container';

const content = document.getElementById('content');
const content_maker = document.getElementById('content-maker');
const content_img =  document.getElementById('content-img');
const content_main= document.getElementById('content-main');

content.className = 'content col-12 col-sm-12';
content_maker.className= 'row';
content_img.className = 'content-img col-12 col-md-6 ';
content_main.className= 'content-main col-12 col-md-6';

          
const footer = document.getElementById('footer');
const footer_container = document.getElementById('footer-container');
const footer_link_container = document.getElementById('footer-link-container');

footer.className='footer';
footer_container.className='footer-container';
footer_link_container.className='link-container';

data.tr.navbar.a.forEach(link =>{
     const a = document.createElement('a');
     a.textContent = link.name;
     a.href= link.href;
     a.className = 'link';

     
     nav.appendChild(a);
     navcontainer.appendChild(nav);
     container.prepend(navcontainer);

})

const select = document.createElement('select');
data.tr.navbar.selection.forEach(link =>{
     const option = document.createElement('option');
     option.textContent=link.name;
     option.value= link.value;

     select.appendChild(option);
     nav.appendChild(select);
     navcontainer.appendChild(nav);
     container.prepend(navcontainer);

})



data.tr.content.img.forEach(link =>{
     const img = document.createElement('img');
     img.src = link.src;

     content_img.appendChild(img);
     content_maker.appendChild(content_img);
     content.appendChild(content_maker);
     container.appendChild(content);
})

data.tr.content.main.forEach(link =>{
     const h1 = document.createElement('h1');
     h1.textContent=link.tittle;

     const h3 = document.createElement('h3');
     h3.textContent=link.subtittle;

     const p = document.createElement('p');
     p.textContent= link.about;

     content_main.appendChild(h1);
     content_main.appendChild(h3);
     content_main.appendChild(p);

     content_maker.appendChild(content_main);
     content.appendChild(content_maker);
     container.appendChild(content);
})





data.tr.footer.outside_a.forEach(link =>{
     const a = document.createElement('a');
     a.textContent = link.name;
     a.href = link.href;
     a.className= link.class;

     footer_container.appendChild(a);
     footer.appendChild(footer_container);
     container.appendChild(footer);
})


data.tr.footer.inside_a.forEach(link =>{
     const a = document.createElement('a');
     a.textContent = link.name;
     a.href = link.href;
     a.className= link.class;

     footer_link_container.appendChild(a);
     footer_container.appendChild(footer_link_container);
     footer.appendChild(footer_container);
     container.appendChild(footer);
})






document.getElementById('sec').addEventListener('change', function() {
     var secilen_dil = this.value;

     changeLanguage(secilen_dil);
})


function changeLanguage(language) {

    
     if (language === 'english') {

          data.eng.navbar.a.forEach(link =>{
               const a = document.createElement('a');
               a.textContent = link.name;
               a.href= link.href;
               a.className = 'link';
          
               nav.appendChild(a);
               navcontainer.appendChild(nav);
               container.prepend(navcontainer);
          
          })
          
          const select = document.createElement('select');
          data.eng.navbar.selection.forEach(link =>{
               const option = document.createElement('option');
               option.textContent=link.name;
               option.value= link.value;
          
               select.appendChild(option);
               nav.appendChild(select);
               navcontainer.appendChild(nav);
               container.prepend(navcontainer);
          
          })
          
          

          
          data.eng.content.img.forEach(link =>{
               const img = document.createElement('img');
               img.src = link.src;
          
               content_img.appendChild(img);
               content_maker.appendChild(content_img);
               content.appendChild(content_maker);
               container.appendChild(content);
          })
          
          data.eng.content.main.forEach(link =>{
               const h1 = document.createElement('h1');
               h1.textContent=link.tittle;
          
               const h3 = document.createElement('h3');
               h3.textContent=link.subtittle;
          
               const p = document.createElement('p');
               p.textContent= link.about;
          
               content_main.appendChild(h1);
               content_main.appendChild(h3);
               content_main.appendChild(p);
          
               content_maker.appendChild(content_main);
               content.appendChild(content_maker);
               container.appendChild(content);

          })
          
          

          
          data.eng.footer.outside_a.forEach(link =>{
               const a = document.createElement('a');
               a.textContent = link.name;
               a.href = link.href;
               a.className= link.class;
          
               footer_container.appendChild(a);
               footer.appendChild(footer_container);
               container.appendChild(footer);
          })
          
          
          data.eng.footer.inside_a.forEach(link =>{
               const a = document.createElement('a');
               a.textContent = link.name;
               a.href = link.href;
               a.className= link.class;
          
               footer_link_container.appendChild(a);
               footer_container.appendChild(footer_link_container);
               footer.appendChild(footer_container);
               container.appendChild(footer);
          })


     } 
     
     else if (language === 'turkce') {
          


          data.tr.navbar.a.forEach(link =>{
               const a = document.createElement('a');
               a.textContent = link.name;
               a.href= link.href;
               a.className = 'link';
          
               nav.appendChild(a);
               navcontainer.appendChild(nav);
               container.prepend(navcontainer);

               
          
          })
          
          const select = document.createElement('select');
          data.tr.navbar.selection.forEach(link =>{
               const option = document.createElement('option');
               option.textContent=link.name;
               option.value= link.value;
          
               select.appendChild(option);
               nav.appendChild(select);
               navcontainer.appendChild(nav);
               container.prepend(navcontainer);
          
          })
          

          
          data.tr.content.img.forEach(link =>{
               const img = document.createElement('img');
               img.src = link.src;
          
               content_img.appendChild(img);
               content_maker.appendChild(content_img);
               content.appendChild(content_maker);
               container.appendChild(content);
          })
          
          data.tr.content.main.forEach(link =>{
               const h1 = document.createElement('h1');
               h1.textContent=link.tittle;
          
               const h3 = document.createElement('h3');
               h3.textContent=link.subtittle;
          
               const p = document.createElement('p');
               p.textContent= link.about;
          
               content_main.appendChild(h1);
               content_main.appendChild(h3);
               content_main.appendChild(p);
          
               content_maker.appendChild(content_main);
               content.appendChild(content_maker);
               container.appendChild(content);
          })
          
          
          

          
          data.tr.footer.outside_a.forEach(link =>{
               const a = document.createElement('a');
               a.textContent = link.name;
               a.href = link.href;
               a.className= link.class;
          
               footer_container.appendChild(a);
               footer.appendChild(footer_container);
               container.appendChild(footer);
          })
          
          
          data.tr.footer.inside_a.forEach(link =>{
               const a = document.createElement('a');
               a.textContent = link.name;
               a.href = link.href;
               a.className= link.class;
          
               footer_link_container.appendChild(a);
               footer_container.appendChild(footer_link_container);
               footer.appendChild(footer_container);
               container.appendChild(footer);
          })


          
      
     }

}


