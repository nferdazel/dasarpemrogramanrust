"use strict";(self.webpackChunkdasarpemrogramanrust=self.webpackChunkdasarpemrogramanrust||[]).push([[6403],{3905:(a,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>m});var t=n(7294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function l(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function A(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},l=Object.keys(a);for(t=0;t<l.length;t++)n=l[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(t=0;t<l.length;t++)n=l[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var d=t.createContext({}),p=function(a){var e=t.useContext(d),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},k=function(a){var e=p(a.components);return t.createElement(d.Provider,{value:e},a.children)},u={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},o=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,l=a.originalType,d=a.parentName,k=A(a,["components","mdxType","originalType","parentName"]),o=p(n),m=i,c=o["".concat(d,".").concat(m)]||o[m]||u[m]||l;return n?t.createElement(c,r(r({ref:e},k),{},{components:n})):t.createElement(c,r({ref:e},k))}));function m(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var l=n.length,r=new Array(l);r[0]=o;var A={};for(var d in e)hasOwnProperty.call(e,d)&&(A[d]=e[d]);A.originalType=a,A.mdxType="string"==typeof a?a:i,r[1]=A;for(var p=2;p<l;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}o.displayName="MDXCreateElement"},6889:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>A,toc:()=>p});var t=n(7462),i=(n(7294),n(3905));const l={sidebar_position:10,title:"A.10. Perulangan \u2192 while",sidebar_label:"A.10. Perulangan \u2192 while"},r=void 0,A={unversionedId:"basic/perulangan-while",id:"basic/perulangan-while",title:"A.10. Perulangan \u2192 while",description:"Di Rust ada beberapa cara untuk melakukan perulangan, salah satunya adalah dengan menggunakan keyword while, dan pada chapter ini kita akan mempelajarinya.",source:"@site/docs/basic/perulangan-while.md",sourceDirName:"basic",slug:"/basic/perulangan-while",permalink:"/basic/perulangan-while",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"A.10. Perulangan \u2192 while",sidebar_label:"A.10. Perulangan \u2192 while"},sidebar:"tutorialSidebar",previous:{title:"A.9. Seleksi Kondisi \u2192  if, else if, else",permalink:"/basic/seleksi-kondisi-if"},next:{title:"A.11. Perulangan \u2192 loop, break, continue, label",permalink:"/basic/perulangan-loop-break-continue-label"}},d={},p=[{value:"A.10.1. Keyword <code>while</code>",id:"a101-keyword-while",level:2},{value:"A.10.2. Nested <code>while</code>",id:"a102-nested-while",level:2},{value:"\u25c9 Macro <code>print</code>",id:"-macro-print",level:3},{value:"A.10.3. Keyword <code>while let</code>",id:"a103-keyword-while-let",level:2},{value:"A.10.4. Menambahkan delay dalam perulangan",id:"a104-menambahkan-delay-dalam-perulangan",level:2},{value:"\u25c9 Keyword <code>use</code> dan module dalam Rust",id:"-keyword-use-dan-module-dalam-rust",level:3},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],k={toc:p};function u(a){let{components:e,...l}=a;return(0,i.kt)("wrapper",(0,t.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Di Rust ada beberapa cara untuk melakukan perulangan, salah satunya adalah dengan menggunakan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"while"),", dan pada chapter ini kita akan mempelajarinya."),(0,i.kt)("p",null,"Perulangan sendiri merupakan teknik untuk mengulang-ulang eksekusi blok kode dengan kondisi tertentu. Perulangan akan terus menerus dieksekusi ketika kondisi perulangan nilainya ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", dan hanya akan berhenti kita nilainya ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h2",{id:"a101-keyword-while"},"A.10.1. Keyword ",(0,i.kt)("inlineCode",{parentName:"h2"},"while")),(0,i.kt)("p",null,"Perulangan menggunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," mengharuskan kondisi perulangan dituliskan di awal dengan notasi penulisan sebagai berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"while kondisi {\n    \n}\n")),(0,i.kt)("p",null,"Contoh berikut adalah penerapan ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," untuk operasi perulangan yang isinya menampilkan angka ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," dengan kondisi ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," dibawah ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let mut i = 0;\nlet max = 5;\n\nwhile i < max {\n    println!("nilai: {i}");\n    i += 1;\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"keyword while",src:n(4735).Z,width:"463",height:"163"})),(0,i.kt)("p",null,"Variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," pada contoh di atas menjadi penentu kapan perulangan berhenti. Di dalam blok kode ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," (yang dimana akan dieksekusi setiap kondisi menghasilkan nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"), nilai variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," di-increment, membuat variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," nilainya selalu bertambah 1 setiap kali perulangan. Perulangan akan berhenti ketika nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," sudah tidak dibawah ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," lagi."),(0,i.kt)("h2",{id:"a102-nested-while"},"A.10.2. Nested ",(0,i.kt)("inlineCode",{parentName:"h2"},"while")),(0,i.kt)("p",null,"Penerapan nested while (atau ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," di dalam ",(0,i.kt)("inlineCode",{parentName:"p"},"while"),") cukup mudah, tulis saja statement ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," di dalam ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," sesuai kebutuhan. Contoh bisa dilihat pada kode berikut, yaitu penerapan teknik nested while untuk print karakter ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," membuat bentuk segitiga."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let mut i = 0;\nlet max = 5;\n\nwhile i < max {\n    let mut j = 0;\n    let max_inner = i;\n\n    while j <= max_inner {\n        print!("* ");\n        j += 1;\n    }\n    \n    println!();\n    i += 1;\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nested while",src:n(8423).Z,width:"448",height:"172"})),(0,i.kt)("h3",{id:"-macro-print"},"\u25c9 Macro ",(0,i.kt)("inlineCode",{parentName:"h3"},"print")),(0,i.kt)("p",null,"Macro ",(0,i.kt)("inlineCode",{parentName:"p"},"print")," kegunaannya mirip dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"println"),", hanya saja tanpa ",(0,i.kt)("em",{parentName:"p"},"newline")," atau baris baru. Jadi semua string yang di-print menggunakan macro ",(0,i.kt)("inlineCode",{parentName:"p"},"print")," akan muncul menyamping ke kanan dan tidak di baris baru. Contoh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'print!("* ");\nprint!("* ");\nprint!("* ");\nprint!("* ");\n')),(0,i.kt)("p",null,"Akan menghasilkan output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"* * * * \n")),(0,i.kt)("h2",{id:"a103-keyword-while-let"},"A.10.3. Keyword ",(0,i.kt)("inlineCode",{parentName:"h2"},"while let")),(0,i.kt)("p",null,"Kita akan bahas keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"while let")," pada chapter ",(0,i.kt)("a",{parentName:"p",href:"/basic/pattern-matching"},"Pattern Matching"),"."),(0,i.kt)("h2",{id:"a104-menambahkan-delay-dalam-perulangan"},"A.10.4. Menambahkan delay dalam perulangan"),(0,i.kt)("p",null,"Eksekusi statement perulangan pada program sangatlah cepat. Bisa jadi dalam 1 detik ada ribuan (atau bahkan jauh lebih banyak) statement dalam perulangan yang dieksekusi. Di-tiap eksekusinya, delay bisa saja ditambahkan, misalnya 1 detik, dan pada contoh di bawah ini kita akan coba mengaplikasikannya."),(0,i.kt)("p",null,"Silakan tulis kode program berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use std::thread::sleep;\nuse std::time::Duration;\n\nfn main() {\n    let mut i = 0;\n    let max = 5;\n\n    while i < max {\n        println!("nilai: {i}");\n        i += 1;\n\n        sleep(Duration::from_secs(1));\n    }\n}\n')),(0,i.kt)("p",null,"Ada beberapa keyword baru dipergunakan pada source code di atas. Untuk sekarang coba jalankan terlebih dahulu program yang baru dibuat, kemudian stop. Text ",(0,i.kt)("inlineCode",{parentName:"p"},"nilai: {i}")," akan muncul di console setiap satu detik, dan hanya akan berhenti ketika program di stop."),(0,i.kt)("p",null,"Selanjutnya kita akan beberapa sintaks baru di atas."),(0,i.kt)("h3",{id:"-keyword-use-dan-module-dalam-rust"},"\u25c9 Keyword ",(0,i.kt)("inlineCode",{parentName:"h3"},"use")," dan module dalam Rust"),(0,i.kt)("p",null,"Keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"use")," memiliki banyak kegunaan. Pada contoh ini ",(0,i.kt)("inlineCode",{parentName:"p"},"use")," difungsikan untuk ",(0,i.kt)("em",{parentName:"p"},"import module"),", yang di bahasa Rust dikenal dengan istilah ",(0,i.kt)("strong",{parentName:"p"},"import paths"),"."),(0,i.kt)("p",null,"Notasi penulisan ",(0,i.kt)("em",{parentName:"p"},"module path")," di Rust dinotasikan dengan separator ",(0,i.kt)("inlineCode",{parentName:"p"},"::"),", contohnya seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"std::thread::sleep")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"std::time::Duration"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Statement ",(0,i.kt)("inlineCode",{parentName:"p"},"use std::thread::sleep")," artinya path ",(0,i.kt)("inlineCode",{parentName:"p"},"std::thread::sleep")," digunakan dalam kode program. ",(0,i.kt)("inlineCode",{parentName:"p"},"sleep")," adalah sebuah fungsi yang gunanya untuk menambahkan jeda dengan durasi sesuai keinginan, contohnya, 1 detik, 30 menit, dst.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Statement ",(0,i.kt)("inlineCode",{parentName:"p"},"use std::time::Duration")," artinya path ",(0,i.kt)("inlineCode",{parentName:"p"},"std::time::Duration")," digunakan dalam kode program. ",(0,i.kt)("inlineCode",{parentName:"p"},"Duration")," merupakan sebuah struct yang isinya banyak hal untuk keperluan yang berhubungan dengan waktu atau ",(0,i.kt)("em",{parentName:"p"},"duration"),"."))),(0,i.kt)("p",null,"Pada contoh di atas, fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"sleep")," dipanggil dalam blok kode perulangan agar ada jeda ditiap eksekusinya. Sedangkan durasi jedanya sendiri ditentukan oleh argument ",(0,i.kt)("inlineCode",{parentName:"p"},"Duration::from_secs(1)")," yang artinya durasi ",(0,i.kt)("inlineCode",{parentName:"p"},"1 detik"),". Dengan ini durasi delay adalah 1 detik."),(0,i.kt)("p",null,"Jika ingin jeda durasi yang lebih lama, ubah saja angka ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," pada ",(0,i.kt)("inlineCode",{parentName:"p"},"Duration::from_secs(1)"),". Contoh: ",(0,i.kt)("inlineCode",{parentName:"p"},"Duration::from_secs(5)")," berarti jeda 5 detik."),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Lebih jelasnya perihal path dibahas pada chapter ",(0,i.kt)("a",{parentName:"li",href:"/basic/path-item"},"Module System \u2192 Pach & Item")),(0,i.kt)("li",{parentName:"ul"},"Lebih jelasnya perihal keyword ",(0,i.kt)("inlineCode",{parentName:"li"},"use")," dibahas pada chapter ",(0,i.kt)("a",{parentName:"li",href:"/basic/use"},"Module System \u2192 Use")),(0,i.kt)("li",{parentName:"ul"},"Lebih jelasnya perihal fungsi dibahas pada chapter ",(0,i.kt)("a",{parentName:"li",href:"/basic/function"},"Function")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanrust-example/tree/master/perulangan_while"},"github.com/novalagung/dasarpemrogramanrust-example/../perulangan_while")),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/ch03-05-control-flow.html"},"https://doc.rust-lang.org/book/ch03-05-control-flow.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/keyword.while.html"},"https://doc.rust-lang.org/std/keyword.while.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/keyword.use.html"},"https://doc.rust-lang.org/std/keyword.use.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/rust-by-example/flow_control/while.html"},"https://doc.rust-lang.org/rust-by-example/flow_control/while.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/stable/std/time/struct.Duration.html"},"https://doc.rust-lang.org/stable/std/time/struct.Duration.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/reference/expressions/while-expr.html"},"https://doc.rust-lang.org/reference/expressions/while-expr.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/reference/paths.html"},"https://doc.rust-lang.org/reference/paths.html"))),(0,i.kt)("hr",null))}u.isMDXComponent=!0},4735:(a,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAc8AAACjCAIAAABjWwLpAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF5WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgMTE2LjM5YWJhZjcsIDIwMjIvMDIvMjUtMjE6NTc6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDktMjVUMTM6NTE6NTgrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA5LTI3VDE3OjE0OjMzKzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA5LTI3VDE3OjE0OjMzKzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRmNTI4ZmIyLThmMzct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"},8423:(a,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAACsCAIAAABjBuuxAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF5WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgMTE2LjM5YWJhZjcsIDIwMjIvMDIvMjUtMjE6NTc6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDktMjVUMTU6MjQ6MDcrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA5LTI3VDE3OjEzOjI0KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA5LTI3VDE3OjEzOjI0KzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmIyZDhiYmNhLTZjOTct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"}}]);