"use strict";(self.webpackChunkdasarpemrogramanrust=self.webpackChunkdasarpemrogramanrust||[]).push([[620],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>s});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=t.createContext({}),o=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},m=function(e){var n=o(e.components);return t.createElement(u.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=o(a),s=i,c=d["".concat(u,".").concat(s)]||d[s]||k[s]||l;return a?t.createElement(c,r(r({ref:n},m),{},{components:a})):t.createElement(c,r({ref:n},m))}));function s(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var o=2;o<l;o++)r[o]=a[o];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8283:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var t=a(7462),i=(a(7294),a(3905));const l={sidebar_position:42,title:"A.42. Pattern Matching",sidebar_label:"A.42. Pattern Matching"},r=void 0,p={unversionedId:"basic/pattern-matching",id:"basic/pattern-matching",title:"A.42. Pattern Matching",description:"Chapter ini membahas tentang pattern matching, sebuah teknik yang lebih advance dibanding seleksi kondisi biasa.",source:"@site/docs/basic/pattern-matching.md",sourceDirName:"basic",slug:"/basic/pattern-matching",permalink:"/basic/pattern-matching",draft:!1,tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42,title:"A.42. Pattern Matching",sidebar_label:"A.42. Pattern Matching"},sidebar:"tutorialSidebar",previous:{title:"A.41. Operator ?",permalink:"/basic/operator-tanda-tanya"},next:{title:"A.43. Static Item",permalink:"/basic/static"}},u={},o=[{value:"A.42.1. Keyword <code>match</code>",id:"a421-keyword-match",level:2},{value:"\u25c9 Menampung nilai balik <code>match</code>",id:"-menampung-nilai-balik-match",level:3},{value:"A.42.2. Pattern matching",id:"a422-pattern-matching",level:2},{value:"\u25c9 Pengecekan nilai enum",id:"-pengecekan-nilai-enum",level:3},{value:"\u25c9 Pattern <code>|</code> dan <code>..</code>",id:"-pattern--dan-",level:3},{value:"\u25c9 Match guard",id:"-match-guard",level:3},{value:"\u25c9 Binding <code>@</code>",id:"-binding-",level:3},{value:"\u25c9 <code>if let</code>",id:"-if-let",level:3},{value:"A.42.3. Destructuring assignment",id:"a423-destructuring-assignment",level:2},{value:"\u25c9 Struct destructuring",id:"-struct-destructuring",level:3},{value:"\u25c9 Enum destructuring",id:"-enum-destructuring",level:3},{value:"\u25c9 Tuple destructuring",id:"-tuple-destructuring",level:3},{value:"\u25c9 Variabel <code>_</code>",id:"-variabel-_",level:3},{value:"\u25c9 Operator <code>..</code>",id:"-operator-",level:3},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Work in progress",id:"-work-in-progress",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],m={toc:o};function k(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,t.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Chapter ini membahas tentang pattern matching, sebuah teknik yang lebih ",(0,i.kt)("em",{parentName:"p"},"advance")," dibanding seleksi kondisi biasa."),(0,i.kt)("p",null,"Dalam pattern matching, pengecekan dilakukan dengan melihat kecocokan suatu pola/pattern."),(0,i.kt)("h2",{id:"a421-keyword-match"},"A.42.1. Keyword ",(0,i.kt)("inlineCode",{parentName:"h2"},"match")),(0,i.kt)("p",null,"Keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," digunakan untuk pattern matching. Contoh penerapan versi sederhananya bisa dilihat berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let time = "morning";\n\nmatch time {\n    "morning"   => println!("isuk"),\n    "afternoon" => println!("awan"),\n    "evening"   => println!("bengi"),\n    _           => println!("mbuh kapan"),\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"eager",fetchpriority:"high",alt:"Pattern Matching",src:a(9125).Z,width:"529",height:"90"})),(0,i.kt)("p",null,"Pada contoh di atas, ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," dicek nilainya menggunakan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," dengan 4 buah klausul:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jika value-nya ",(0,i.kt)("inlineCode",{parentName:"li"},"morning"),", tampilkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"isuk")),(0,i.kt)("li",{parentName:"ul"},"Jika value-nya ",(0,i.kt)("inlineCode",{parentName:"li"},"afternoon"),", tampilkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"awan")),(0,i.kt)("li",{parentName:"ul"},"Jika value-nya ",(0,i.kt)("inlineCode",{parentName:"li"},"evening"),", tampilkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"bengi")),(0,i.kt)("li",{parentName:"ul"},"Jika tidak ada yang cocok dari klausus di atas, maka tampilkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"mbuh kapan"))),(0,i.kt)("p",null,"Contoh di atas adalah ekuivalen dengan seleksi kondisi ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let time = "morning";\n\nif time == "morning" {\n    println!("isuk")\n} else if time == "afternoon" {\n    println!("awan")\n} else if time == "evening" {\n    println!("bengi")\n} else {\n    println!("mbuh kapan")\n}\n')),(0,i.kt)("p",null,"Ada satu syarat yang harus dipenuhi dalam penerapan pattern matching, yaitu semua kondisi yang memungkinkan harus ditulis, harus lengkap. Ibarat ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," yang harus ada block ",(0,i.kt)("inlineCode",{parentName:"p"},"else"),"-nya."),(0,i.kt)("p",null,"Variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," digunakan sebagai else-nya block ",(0,i.kt)("inlineCode",{parentName:"p"},"match"),". Tanpa adanya kondisi ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," maka besar kemungkinan block ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," error jika klausulnya tidak lengkap."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Pattern Matching",src:a(9310).Z,width:"755",height:"284"})),(0,i.kt)("h3",{id:"-menampung-nilai-balik-match"},"\u25c9 Menampung nilai balik ",(0,i.kt)("inlineCode",{parentName:"h3"},"match")),(0,i.kt)("p",null,"Block statement ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," bisa saja menghasilkan return value. Contohnya bisa dilihat berikut ini, hasil dari pattern matching ditampung ke variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"time_but_in_javanese"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let time = "morning";\n\nlet time_but_in_javanese = match time {\n    "morning"   => "isuk",\n    "afternoon" => "awan",\n    "evening"   => "bengi",\n    _           => "mbuh kapan",\n};\n\nprintln!("{time_but_in_javanese}");\n')),(0,i.kt)("h2",{id:"a422-pattern-matching"},"A.42.2. Pattern matching"),(0,i.kt)("p",null,"Contoh di atas bisa dikategorikan sebagai seleksi kondisi biasa meskipun menggunakan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"match"),". Setelah ini kita akan pelajari macam-macam pattern/pola yang di-support dalam pattern matching di Rust."),(0,i.kt)("h3",{id:"-pengecekan-nilai-enum"},"\u25c9 Pengecekan nilai enum"),(0,i.kt)("p",null,"Tipe data ",(0,i.kt)("a",{parentName:"p",href:"/basic/option-type"},"Option")," adalah salah satu enum yang paling sering dipakai pada pattern matching. Enum ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," memiliki 2 enum value, ",(0,i.kt)("inlineCode",{parentName:"p"},"Some")," yang merepresentasikan sebuah nilai, dan ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," yang berarti tidak ada nilai."),(0,i.kt)("p",null,"Pattern matching pada enum cukup mudah, caranya bisa dilihat pada contoh berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let value: Option<i32> = Option::Some(5);\n\nmatch value {\n    Some(1) => println!("one"),\n    Some(2) => println!("two"),\n    Some(x) => println!("{x} greater than two"),\n    _       => println!("none"),\n}\n')),(0,i.kt)("p",null,"Variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," nilainya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"Some(5)"),". Variabel tersebut dimasukkan ke block ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," dengan 4 buah kondisi pengecekan:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jika ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," nilainya ",(0,i.kt)("inlineCode",{parentName:"li"},"Some(1)"),", tampilkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"one")),(0,i.kt)("li",{parentName:"ul"},"Jika ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," nilainya ",(0,i.kt)("inlineCode",{parentName:"li"},"Some(2)"),", tampilkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"two")),(0,i.kt)("li",{parentName:"ul"},"Jika ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," nilainya ",(0,i.kt)("inlineCode",{parentName:"li"},"Some(x)"),", tampilkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"{x} greater than two")),(0,i.kt)("li",{parentName:"ul"},"Jika tidak ada yang cocok dari klausus di atas, maka tampilkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"none"))),(0,i.kt)("p",null,"Tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," pasti berpotensi berisi ",(0,i.kt)("inlineCode",{parentName:"p"},"Some")," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),", tidak mungkin selainnya. Klausul terakhir di contoh di atas (",(0,i.kt)("inlineCode",{parentName:"p"},'_ => println!("none")'),") terpenuhi ketika nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),". Pada konteks ini mengganti ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," menjadikan klausul pada pattern matching tetap lengkap."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'match value {\n    Some(1) => println!("one"),\n    Some(2) => println!("two"),\n    Some(x) => println!("{x} greater than two"),\n    None    => println!("none"),\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lebih jelasnya mengenai ",(0,i.kt)("inlineCode",{parentName:"p"},"Some")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," dibahas pada chapter ",(0,i.kt)("a",{parentName:"p",href:"/basic/option-type"},"Tipe Data \u279c Option"))),(0,i.kt)("h3",{id:"-pattern--dan-"},"\u25c9 Pattern ",(0,i.kt)("inlineCode",{parentName:"h3"},"|")," dan ",(0,i.kt)("inlineCode",{parentName:"h3"},"..")),(0,i.kt)("p",null,"Klausul pattern matching bisa berisi operasi ",(0,i.kt)("inlineCode",{parentName:"p"},"OR")," maupun ",(0,i.kt)("inlineCode",{parentName:"p"},"IN")," caranya dengan memanfaatkan operator berikut:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Operator ",(0,i.kt)("inlineCode",{parentName:"li"},"|")," digunakan sebagai logika ",(0,i.kt)("inlineCode",{parentName:"li"},"OR")),(0,i.kt)("li",{parentName:"ul"},"Operator ",(0,i.kt)("inlineCode",{parentName:"li"},"..")," atau ",(0,i.kt)("inlineCode",{parentName:"li"},"..=")," digunakan sebagai logika ",(0,i.kt)("inlineCode",{parentName:"li"},"IN"))),(0,i.kt)("p",null,"Contoh penerapannya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let value = 6;\n\nmatch value {\n    1 | 2 => println!("one or two"),\n    3..=5 => println!("three through five"),\n    6     => println!("six"),\n    _     => println!("other number"),\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jika ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," nilainya ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," atau ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),", tampilkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"one or two")),(0,i.kt)("li",{parentName:"ul"},"Jika ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," nilainya antara ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," hingga ",(0,i.kt)("inlineCode",{parentName:"li"},"5"),", tampilkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"three through five")),(0,i.kt)("li",{parentName:"ul"},"Jika ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," nilainya ",(0,i.kt)("inlineCode",{parentName:"li"},"6"),", tampilkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"six")),(0,i.kt)("li",{parentName:"ul"},"Jika tidak ada yang cocok dari klausus di atas, maka tampilkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"other number"))),(0,i.kt)("p",null,"Pattern di atas juga bisa diterapkan dalam variabel enum value, contohnya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let value: Option<i32> = Some(5);\n\nmatch value {\n    Some(1 | 2) => println!("one or two"),\n    Some(3..=5) => println!("three through five"),\n    Some(6)     => println!("six"),\n    Some(x)     => println!("{x} greater than six"),\n    _           => println!("none"),\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Operator ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," memiliki 2 kegunaan:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Pada statement biasa, fungsinya adalah untuk ",(0,i.kt)("strong",{parentName:"li"},"bitwise OR"),"."),(0,i.kt)("li",{parentName:"ul"},"Pada pattern matching, fungsinya untuk ",(0,i.kt)("strong",{parentName:"li"},"OR"),", kegunaannya sama seperti ",(0,i.kt)("inlineCode",{parentName:"li"},"||")," pada statement biasa.")),(0,i.kt)("p",{parentName:"blockquote"},"Lebih jelasnya mengenai bitwise operator dibahas pada chapter ",(0,i.kt)("a",{parentName:"p",href:"#/wip/bitwise-operation"},"Bitwise Operation"))),(0,i.kt)("h3",{id:"-match-guard"},"\u25c9 Match guard"),(0,i.kt)("p",null,"Match guard adalah teknik menambahkan sub seleksi kondisi pada klausul ",(0,i.kt)("inlineCode",{parentName:"p"},"match"),". Contoh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let value = Some(4);\n\nlet message = match value {\n    Some(x) if x % 2 == 0 => format!("number {} is even", x),\n    Some(x)               => format!("number {} is odd", x),\n    None                  => String::new(),\n};\n\nprintln!("{message}");\n')),(0,i.kt)("p",null,"Klausul pertama di atas, yaitu ",(0,i.kt)("inlineCode",{parentName:"p"},"Some(x)")," ditambahkan match guard ",(0,i.kt)("inlineCode",{parentName:"p"},"if x % 2 == 0"),"."),(0,i.kt)("h3",{id:"-binding-"},"\u25c9 Binding ",(0,i.kt)("inlineCode",{parentName:"h3"},"@")),(0,i.kt)("p",null,"Operator ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," digunakan untuk menampung nilai klausul ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," yang default-nya tidak bisa ditampung. Agar lebih jelas, silakan pelajari pattern matching berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let value = 3;\nmatch value {\n    1 | 2 => println!("one or two"),\n    3..=5 => println!("three through five"),\n    6     => println!("six"),\n    _     => println!("other number"),\n}\n')),(0,i.kt)("p",null,"Klausul ",(0,i.kt)("inlineCode",{parentName:"p"},"1 | 2")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"3..=5")," nilai by default tidak bisa diakses. Kita hanya tau bahwa nilai pasti antara ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," untuk klausul ",(0,i.kt)("inlineCode",{parentName:"p"},"1 | 2"),", dan ",(0,i.kt)("inlineCode",{parentName:"p"},"3 / 4 / 5")," untuk klausul ",(0,i.kt)("inlineCode",{parentName:"p"},"3..=5"),"."),(0,i.kt)("p",null,"Nilai pasti klausul tersebut bisa ditampung menggunakan operator ",(0,i.kt)("inlineCode",{parentName:"p"},"@"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let value = 3;\nmatch value {\n    n @ (1 | 2) => println!("one or two ({})", n),\n    n @ 3..=5   => println!("three through five ({})", n),\n    6           => println!("six"),\n    _           => println!("other number"),\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Khusus untuk penggunaan ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," binding pada operator ",(0,i.kt)("inlineCode",{parentName:"p"},"|"),", pada penulisan klausul seleksi kondisinya harus diapit tanda ",(0,i.kt)("inlineCode",{parentName:"p"},"()"),".")),(0,i.kt)("h3",{id:"-if-let"},"\u25c9 ",(0,i.kt)("inlineCode",{parentName:"h3"},"if let")),(0,i.kt)("p",null,"Untuk memahami pattern matching menggunakan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"if let"),", silakan pelajari kode berikut terlebih dahulu."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let value: Option<i32> = Some(5);\n\nmatch value {\n    Some(1) => println!("one"),\n    Some(x) => println!("{x} greater than two"),\n    _       => println!("none"),\n}\n')),(0,i.kt)("p",null,"Pattern matching di atas cukup mudah dipahami, isinya ada 2 kondisi ",(0,i.kt)("inlineCode",{parentName:"p"},"Some")," dan 1 buah else (menggunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),"). "),(0,i.kt)("p",null,"Block kode tersebut jika dikonversi ke bentuk ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," hasilnya seperti ini:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let value = Some(5);\n\nif let Some(1) = value {\n    println!("one");\n} else if let Some(x) = value {\n    println!("{x} greater than two");\n} else {\n    println!("none");\n}\n')),(0,i.kt)("p",null,"Dari sini cukup jelas kegunaan dari ",(0,i.kt)("inlineCode",{parentName:"p"},"if let"),". Meskipun menggunakan operator ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," (bukan ",(0,i.kt)("inlineCode",{parentName:"p"},"=="),") block kode seleksi kondisi di atas adalah pattern matching, yang isinya melakukan pengecekan sama persis seperti pattern matching pada kode sebelumnya."),(0,i.kt)("p",null,"Tambahan contoh, 2 block kode berikut adalah juga ekuivalen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let value = 6;\nmatch value {\n    1 | 2 => println!("one or two"),\n    3..=5 => println!("three through five"),\n    6     => println!("six"),\n    _     => println!("other number"),\n}\n\n// ... vs ...\n\nlet value = Some(5);\nif let Some(1 | 2) = value {\n    println!("one or two");\n} else if let Some(3..=5) = value {\n    println!("three through five");\n} else if let Some(6) = value {\n    println!("six");\n} else {\n    println!("other number");\n}\n')),(0,i.kt)("h2",{id:"a423-destructuring-assignment"},"A.42.3. Destructuring assignment"),(0,i.kt)("h3",{id:"-struct-destructuring"},"\u25c9 Struct destructuring"),(0,i.kt)("p",null,"Operasi ",(0,i.kt)("em",{parentName:"p"},"destructuring")," (menampung item suatu tipe) bisa dilakukan menggunakan pattern matching."),(0,i.kt)("p",null,"Pada kode di bawah ini, variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," yang bertipe struct ",(0,i.kt)("inlineCode",{parentName:"p"},"Point { x: i32, y: i32 }")," dimasukkan pada block pattern matching. Item dari struct tersebut di-",(0,i.kt)("em",{parentName:"p"},"destructure")," ke variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," masing-masing klausul pattern matching item-nya ditampung ke variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'struct Point {\n    x: i32,\n    y: i32,\n}\n\nlet p = Point { x: 0, y: 7 };\n\nmatch p {\n    Point { x, y: 0 } => println!("x axis at {x}"),\n    Point { x: 0, y } => println!("y axis at {y}"),\n    Point { x, y }    => println!("axis: ({x}, {y})")\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jika ",(0,i.kt)("inlineCode",{parentName:"li"},"p.y")," nilainya ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),", tampilkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"x axis at {x}")),(0,i.kt)("li",{parentName:"ul"},"Jika ",(0,i.kt)("inlineCode",{parentName:"li"},"p.x")," nilainya ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),", tampilkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"y axis at {y}")),(0,i.kt)("li",{parentName:"ul"},"Jika tidak ada yang cocok dari klausus di atas, maka tampilkan pesan ",(0,i.kt)("inlineCode",{parentName:"li"},"axis: ({x}, {y})"))),(0,i.kt)("p",null,"Operasi destructuring hasilnya pasti sukses, karena alasan ini keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," boleh tidak digunakan. Contohnya bisa dilihat pada kode berikut, variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," di-",(0,i.kt)("em",{parentName:"p"},"destructure")," ke variabel baru yaitu ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let Point { x, y } = p;\n\nprintln!("x: {x}");\nprintln!("y: {y}");\n')),(0,i.kt)("h3",{id:"-enum-destructuring"},"\u25c9 Enum destructuring"),(0,i.kt)("p",null,"Destructuring juga bisa dilakukan pada tipe data enum caranya dengan menggunakan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," (wajib menggunakan salah satu keyword tersebut)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'enum Color {\n    Black,\n    White,\n    Rgb(i32, i32, i32)\n}\n\nlet color = Color::Rgb(0, 160, 255);\n\nif let Color::Rgb(r, g, b) = color {\n    println!("r: {r}");\n    println!("g: {g}");\n    println!("b: {b}");\n}\n\nmatch color {\n    Color::Rgb(r, g, b) => println!("r: {r}, g: {g}, b: {b}"),\n    _                   => println!("other color")\n}\n')),(0,i.kt)("h3",{id:"-tuple-destructuring"},"\u25c9 Tuple destructuring"),(0,i.kt)("p",null,"Tuple bisa di-destructure secara langsung tanpa menggunakan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"match"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let grades = ("A", "B", "C");\n\nlet (grade_a, grade_b, grade_c) = grades;\nprintln!("grade_a: {grade_a}");\nprintln!("grade_b: {grade_b}");\nprintln!("grade_c: {grade_c}");\n\nmatch grades {\n    (grade_a, grade_b, grade_c) => {\n        println!("grade_a: {grade_a}");\n        println!("grade_b: {grade_b}");\n        println!("grade_c: {grade_c}");\n    }\n}\n')),(0,i.kt)("h3",{id:"-variabel-_"},"\u25c9 Variabel ",(0,i.kt)("inlineCode",{parentName:"h3"},"_")),(0,i.kt)("p",null,"Variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," bisa dimanfaatkan pada statement ",(0,i.kt)("em",{parentName:"p"},"destructuring")," untuk menampung item yang tidak digunakan. Contoh penerapannya bisa dilihat di bawah ini. Tuple ",(0,i.kt)("inlineCode",{parentName:"p"},"numbers")," di-destructure dan hanya diambil elemen ke-2-nya."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let numbers = (2, 4, 32);\n\nlet (_, second, _) = numbers;\nprintln!("second number: {second}");\n')),(0,i.kt)("h3",{id:"-operator-"},"\u25c9 Operator ",(0,i.kt)("inlineCode",{parentName:"h3"},"..")),(0,i.kt)("p",null,"Operator ",(0,i.kt)("inlineCode",{parentName:"p"},"..")," bisa digunakan untuk meng-exclude item dalam range tertentu. Sebagai contoh, tuple ",(0,i.kt)("inlineCode",{parentName:"p"},"numbers")," di-destructure dan hanya diambil nilai elemen ke-1 dan terakhirnya."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let numbers = (2, 4, 8, 16, 32);\n\nlet (first, .., last) = numbers;\nprintln!("first number: {first}");\nprintln!("last number: {last}");\n')),(0,i.kt)("p",null,"Opeartor ",(0,i.kt)("inlineCode",{parentName:"p"},"..")," hanya bisa digunakan pada statement destructuring di posisi tengah, awal, atau akhir (pilih salah satu). Contoh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let (first, .., last) = numbers;\nprintln!("first number: {first}");\nprintln!("last number: {last}");\n\nlet (first, ..) = numbers;\nprintln!("first number: {first}");\n\nlet (.., last) = numbers;\nprintln!("last number: {last}");\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanrust-example/tree/master/pattern_matching"},"github.com/novalagung/dasarpemrogramanrust-example/../pattern_matching")),(0,i.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/seleksi-kondisi-if"},"Seleksi Kondisi \u279c if, else if, else")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/tuple"},"Tipe Data \u279c Tuple")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/struct"},"Struct")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/enum"},"Enum")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/option-type"},"Tipe Data \u279c Option"))),(0,i.kt)("h3",{id:"-work-in-progress"},"\u25c9 Work in progress"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pembahasan tentang ",(0,i.kt)("inlineCode",{parentName:"li"},"while let"))),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html"},"https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/rust-by-example/flow_control/match.html"},"https://doc.rust-lang.org/rust-by-example/flow_control/match.html"))))}k.isMDXComponent=!0},9125:(e,n,a)=>{a.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhEAAABaCAIAAACJ/JPDAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFGGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgMTE2LjM5YWJhZjcsIDIwMjIvMDIvMjUtMjE6NTc6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjFUMTI6NTE6MTArMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIxVDE0OjU5OjMwKzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIxVDE0OjU5OjMwKzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzNGE5YjJkLTYzMzct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"},9310:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/pattern-matching-2-5b5fd279cb60f0d2dc3002667e49a970.png"}}]);