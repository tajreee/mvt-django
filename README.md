# Proyek Django Pemrograman Berbasis Platform
Nama        : Tajri Mintahtihal Anhaar\
NPM         : 2206030312\
Kelas       : PBP F\
Kode Asdos  : VCY

## Pendahuluan
Repositori ini digunakan sebagai direktori tugas proyek Django mata kuliah Pemrograman Berbasis Platform (PBP) tahun 2022/2023 Ganjil

## Tautan Web Django
Link Adaptable: https://ngopy.adaptable.app/

## Pertanyaan dan Jawaban Tugas 2
1. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step.
    - Membuat folder baru dengan nama yang diinginkan sebagai tempat untuk memulai project Django.
    - Membuat virtual environtment pada direktori lokal untuk menjalankan proses project Django.
    - Mempersiapkan dependencies dengan requirements.txt yang berisi package-package yang akan digunakan di project Django.
    - Memasang depedencies tersebut dengan virtual environtment lalu membuat project Django dengan nama project yang diinginkan.
    - Melakukan konfigurasi pada setting.py agar project tersebut mengizinkan hostnya untuk menjalankan web aplikasi.
    - Jalankan runserver agar server web yang di-deploy dapat digunakan.
    - Membuat aplikasi "main" lalu menambahkan aplikasi tersebut ke setting.py bagian INSTALLED_APP agar aplikasi tersebut dapat diakses di web aplikasi.
    - Membuat direktori baru "templates" di dalam aplikasi main lalu membuat berkas baru "main.html" yang akan digunakan sebagai template/tampilan pada web.
    - Membuat model baru di dalam models.py pada direktori main sesuai dengan kebutuhan aplikasi serta melakukan migrasi pada setiap perubahan models.py agar tercatat di database.
    - Menghubungkan view dengan template untuk menampilkan konten pada view.py.
    - Memodifikasi template pada main.html agar dapat menampilkan konten pada view.py.
    - Melakukan konfigurasi routing urls.py pada aplikasi main.
    - Menghubungkan urls.py pada aplikasi main dengan urls.py pada project agar kontennya dapat dilihat pada halaman web melalui main.html.
    - Membuat repository GitHub dan melakukan inisialisasi direktori lokal ke GitHub untuk melakukan deployment halaman webnya.
    - Menghubungkan direktori lokal ke repository GitHub.
    - Melakukan add keseluruhan berkat, commit, dan push ke repository GitHub.
    - Membuat README.md yang berisi jawaban atas pertanyaan yang diajukan.

2. Buatlah bagan yang berisi request client ke web aplikasi berbasis Django beserta responnya dan jelaskan pada bagan tersebut kaitan antara urls.py, views.py, models.py, dan berkas html.

    ![alt text](/images/bagan.png)
    Client melakukan request ke internet dan akan diproses oleh urls.py. Kemudian urls.py meneruskan request Client ke views.py untuk menampilkan antarmuka pengguna yang sesuai. Setelah itu, views.py akan melakukan read dan write pada data yang ada di models.py untuk menampilkan data-data pada database ke Client. Hasil dari data-data tersebut dikembalikan ke views.py dan ditampilkan kepada Client dalam bentuk HTML sebagai response-nya.


3. Jelaskan mengapa kita menggunakan virtual environment? Apakah kita tetap dapat membuat aplikasi web berbasis Django tanpa menggunakan virtual environment?
    - Dalam proses deployment project Django, kita menggunakan virtual environment dikarenakan virtual environment berperan dalam mengisolasi package dan dependencies dari aplikasi sehingga tidak bertabrakan dengan versi lain yang ada pada komputer kita. Hal ini untuk mencegah terjadinya konflik antar package dan dependencies.
    - Kita tetap dapat melakukannya, namum seperti yang telah dijelaskan di atas, melakukan pembuatan aplikasi web berbasis Django tanpa menggunakan virtual environment dapat mengakibatkan konflik antar package dan dependecies sehingga dapat mengakibatkan terganggunya project lain yang ada di komputer kita. Jadi, melakukan pembuatan aplikasi web berbasis Django tanpa menggunakan virtual environment sangat tidak disarankan.

4. Jelaskan apakah itu MVC, MVT, MVVM dan perbedaan dari ketiganya.
    - MVC atau Model-View-Controller adalah suatu arsitektur software yang memiliki komponen yaitu Model yang merupakan representasi dari data dan aturan dalam aplikasi, View yang merupakan tampilan pada aplikasi, dan Controller yang merupakan penghubung antara Model dan View.
    - MVT atau Model-View-Template adalah suatu konsep arsitektur pengembangan web yang memiliki komponen yaitu Model yang mengatur dan mengelola data, View yang mengontrol data yang dikelola oleh model akan ditampilkan kepada pengguna, dan Template yang mengatur tampilan antarmuka pengguna.
    - MVVM atau Model-View-ViewModel adalah suatu konsep arsitektur yang memiliki komponen mirip dengan MVC, hanya saja ViewModel digunakan sebagai pengganti Controller.
    - Perbedaan ketiganya terdapat pada Template, yaitu Template akan mengontrol data yang akan ditampilkan, sedangkan Controller dan VIewModel digunakan hanya untuk menghubungkan Model dan View. Selain itu, MVC dan MVVM sering digunakan pada pembuatan aplikasi yang besar seperti aplikasi dekstop, sedangkan MVT sering digunakan pada pembuatan aplikasi web seperti Django.

Referensi:
- https://ediweb.dev/python/cara-membuat-virtual-environment-python
- https://fittechinova.com/blog/detail/mvc-vs-mvp-vs-mvvm-apa-perbedaan-diantara-ketiganya-dan-mana-yang-terbaik-diantara-mereka


## Pertanyaan dan Jawaban Tugas 3
1. Apa perbedaan antara form POST dan form GET dalam Django?
    - Pada POST, nilai variable tidak ditampilkan di URL, tidak dibatasi panjang string, biasanya digunakan sebagai input data melalui form, dan digunakan untuk mengirimkan data-data penting seperti password.
    - Pada GET, nilai variable ditampilkan di URL, dibatasi sampai 2047 karakter, biasa digunakan untuk input data melalui link, dan digunakan untuk mengirim data-data yang kurang penting.

2. Apa perbedaan utama antara XML, JSON, dan HTML dalam konteks pengiriman data?
    - XML, memiliki tanda untuk membedakan atribut data dan data aktual. Selain itu, XML lebih fleksibel dan mendukung tipe data yang kompleks. XML juga menyimpan data dalam struktur seperti pohon yang menyajikan data dimulai dengan elemen induk (akar) seperti HTML. Penguraian XML seringkali memperlambat dan mempersulit proses.
    - JSON, bersifat independen dari setiap bahasa pemrograman dan merupakan output API umum. JSON menggunakan key-value dengan key-nya berupa string dan value-nya berupa tipe data apapun yang mendukung. JSON hanya mendukung tipe data yang terbatas, seperti string, angka, dan objek. JSON dapat diurai dengan lebih cepat daripada XML.
    - HTML, digunakan untuk menampilkan konten di web. HTML memiliki struktur yang mirip dengan XML dengan struktur pohon untuk mengatur elemen-elemen yang akan ditampilkan di halaman web.

3. Mengapa JSON sering digunakan dalam pertukaran data antara aplikasi web modern?
    - JSON memiliki format yang ringan dan lebih mudah dibaca oleh manusia dan berbagai bahasa pemrograman. JSON juga memiliki struktur data yang sederhana dengan key-value nya sehingga mudah dipahami. JSON sering digunakan untuk memudahkan mendapatkan informasi yang dibutuhkan dari aplikasi web modern.

4. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).
    - Membuat file forms.py lalu menciptkan sebuah class ItemForm untuk membuat suatu input sesuai dengan isi models.py.
    - Menambahkan file create_item.html sebagai tampilan untuk menambahkan Item dengan fields yang ada di models.py melalui forms.py sebagai inputnya.
    - Menambahkan fungsi create_item pada views.py agar input form dapat terlihat dan bekerja ketika dilakukan suatu input.
    - Menambahkan fungsi show_xml, show_json, show_xml_by_id, dan show_json_by_id pada views.py untuk menampilkan informasi mengenai data objek yang telah ditambahkan.
    - Melakukan routing URL untuk tiap fungsi-fungsi pada views.py agar dapat dijalakan di web aplikasi Django.
    - Mengisi README.md dengan pertanyaan dan jawaban untuk Tugas 3.
    - Membuka Postman untuk mengakses hasil routing URL di atas.
    - Melakukan add, commit, dan push ke GitHub

**Screenshot Postman 5 URL**
- URL main.html
![main.html](/images/main-views.png)

- URL create_item
![create-item.html](/images/create-item-views.png)

- URL XML
![xml views](/images/xml-views.png)

- URL JSON
![json views](/images/json-views.png)

- URL XML by ID
![xml-by-id views](/images/xml-by-id-views.png)

- URL JSON by ID
![json-by-id views](/images/json-by-id-views.png)



Referensi:
- https://gist.github.com/rririanto/442f0590578ca3f8648aeba1e25f8762
- https://aws.amazon.com/id/compare/the-difference-between-json-xml/

## Pertanyaan dan Jawaban Tugas 4
1. Apa itu Django *UserCreationForm*, dan jelaskan apa kelebihan dan kekurangannya?
    - *UserCreationForm* adalah impor formulir bawaan dari Django yang menyediakan layanan untuk memudahkan pembuatan formulir pendaftaran pengguna dalam aplikasi web. Dengan itu, pengguna baru dapat mendaftar dengan mudah di aplikasi web tanpa harus menulis kode dari awal.
    - Kelebihan dari *UserCreationForm* yang dapat dilihat dari hasil menjalankan aplikasi web yaitu, mudah digunakan, fleksibel karena dapat ditambahkan dan dikurangi sesuai keinginan, dan terhubung langsung dengan Django sehingga tersimpan langsung di dalam database.
    - Kekurangan dari *UserCreationForm* yang dapat dilihat dari hasil menjalankan aplikasi web yaitu, kurangnya kustomisasi untuk kebutuhan atribut dan kurangnya tampilan desain yang sesuai dengan keinginan.

2. Apa perbedaan antara autentikasi dan otorisasi dalam konteks Django, dan mengapa keduanya penting?
    - Autentikasi digunakan untuk memverifikasi pengguna yang login ke aplikasi web dan Otoritasi digunakan untuk menentukan apa yang boleh dilakukan oleh pengguna yang diautentikasi.
    - Keduanya penting untuk membangun aplikasi yang aman dan tersturktur, yang melindungi data pengguna dan memberikan akses sesuai dengan izin masing-masing.

3. Apa itu cookies dalam konteks aplikasi web, dan bagaimana Django menggunakan cookies untuk mengelola data sesi pengguna?
    - Cookie adalah informasi mengenai sejarah jejak dan aktivitas yang dilakukan ketika menelusuri sebuah aplikasi web.
    - Django menggunakan cookies untuk mengatur cookiesnya sesuai dengan yang kita inginkan. Django juga menggunakan cookies untuk menghapus cookies terkait aktivitas yang dilakukan pengguna. Selain itu, Django juga menggunakan untuk mengakses semua cookies yang ada di aplikasi web.

4. Apakah penggunaan cookies aman secara default dalam pengembangan web, atau apakah ada risiko potensial yang harus diwaspadai?
    - Umumnya, cookies tidak membawa berbagai jenis virus ke komputer kita ketika melakukan perpindahan data dari website ke komputer atau sebaliknya. Namun, perlu diingat bahwa kita tidak tahu bagaimana internet digunakan oleh orang lain. Data pada cookies memiliki risiko potensial yang harus diwaspadai agar tidak digunakan dicuri oleh oknum-oknum tidak bertanggung jawab. Untuk itu, kita perlu berhati-hati dan waspada ketika mengunjungi aplikasi web yang mencurigakan.

5. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step!
    - Membuat fungsi registrasi, login, dan logout dengan bawaan dari Django disertai dengan sedikit perubahan pada pesannya.
    - Menghubungkan fungsi dengan urls.py agar terjadi sinkronisasi pada aplikasi web.
    - Membuat 2 akun untuk menguji form Models apakah dapat berjalan dengan baik atau tidak.
    - Tiap akun mengisi form Models tersebut sebanyak 3 data.
    - Menghubungkan Models dengan user untuk membatasi akses data yang dapat dilihat oleh user dengan melakukan filter Models sesuai dengan akun user agar data yang diinput hanya bisa dilihat oleh user tersebut saja.
    - Menampilkan user yang login dan modifikasi fungsi login dan logout agar dapat menyimpan aktivitas user ketika menjelajahi aplikasi web dengan menerapkan dan mengatur cookies pada fungsi tersebut.
    - Menambahkan isi README.md untuk menjawab pertanyaan Tugas 3.
    - Mencari referensi di internet untuk menjawab pertanyaan tersebut.
    - Melakukan add-commit-push ke GitHub.

Referensi:
- https://www.pythontutorial.net/django-tutorial/django-cookies/
- https://docs.djangoproject.com/en/4.2/topics/auth/#:~:text=The%20Django%20authentication%20system%20handles%20both%20authentication%20and,authentication%20is%20used%20to%20refer%20to%20both%20tasks.
- https://pbp-fasilkom-ui.github.io/ganjil-2024/docs/tutorial-3

## Pertanyaan dan Jawaban Tugas 5

1. Jelaskan manfaat dari setiap element selector dan kapan waktu yang tepat untuk menggunakannya.
    - Element Selector adalah memilih element yang spesifik untuk diubah tampilannya menggunakan CSS. Element Selector memiliki manfaat untuk mengatur tampilan elemen tertentu bersanaab secara langsung. Waktu yang paling tepat Menggunakan Element Selector dalam CSS adalah ketika ingin mengatur suatu elemen dengan tampilan yang sama contohnya Element Selector pada **body**. Menerapkan CSS pada **body** akan langsung mengubah tampilan body di aplikasi web tersebut di manapun path yang sedang di buka sehingga tidak perlu mengatur masing-masing path untuk mendapatkan tampilan yang sama.

2.  Jelaskan HTML5 Tag yang kamu ketahui.
    - <*header*> = tag html5 yang berfungsi untuk menentukan letak header pada aplikasi web.
    - <*main*> = tag html5 yang berfungsi untuk menentukan letak konten utama pada aplikasi web.
    - <*footer*> = tag html5 yang berfungsi untuk menentukan letak footer pada aplikasi web.
    - <*nav*> = tag html5 yang berfungsi untuk memberikan navigasi ke konten yang sesuai.
    - <*section*> = tag html5 yang berfungsi untuk menentukan suatu section dari suatu posisi. Mirip dengan <*div*>
    - <*summary*> = tag html5 yang berfungsi untuk memberikan judul pada tag <*details*>.
    - <*details*> = tag html5 yang berfungsi untuk memberikan informasi tambahan.

3. Jelaskan perbedaan antara margin dan padding.
    - Margin adalah suatu atribut pada rule CSS yang berguna untuk memberikan jarak antar elemen di sekitarnya.
    - Padding adalah suatu atribut pada rule CSS yang berguna untuk memberikan jarak antar konten dengan batas kontainernya. 

4. Jelaskan perbedaan antara framework CSS Tailwind dan Bootstrap. Kapan sebaiknya kita menggunakan Bootstrap daripada Tailwind, dan sebaliknya?
    - Bootstrap memberikan komponen tampilan yang telah dirancang sebelumnya sehingga lebih terstruktur dan konsisten. Sedangkan Tailwind mengedepankan pendekatan "utility-first" sehingga memberikan kebebasan untuk kreatif.
    - Bootstrap memberikan *framework* yang relatif terstruktur dan telah dirancang sebelumnya sehingga memberikan stabilitas dan kemudahan dalam menggunakannya. Sedangkan Tailwind memberikan kebebasan desain sehingga lebih fleksibel dibanding Bootstrap.
    - Bootstrap cenderung memiliki ukuran file yang besar karena sudah disediakan komponen dan fitur yang siap dipakai. Sedangkan Tailwind dirancang agar lebih ringan dalam ukuran file, namun dapat bertambah besar jika banyak utility yang digunakan.

5. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).
    - Menghubungkan file static CSS ke project agar bisa dilakukan pengodean mengatur desain tiap template html.
    - Menentukan bagaimana template akan didesain.
    - Mencari template di internet untuk dijadikan referensi desain.
    - Mengaplikasikan referensi pada template html yang ingin didesain.
    - Melakukan pengujian agar tidak terjadi kesalahan pengodean CSS seperti wrap jika ukuran kontainer diperkecil.



Referensi:
- https://www.w3schools.blog/html5-tags
- https://www.pemburukode.com/perbedaan-margin-dan-padding-css/