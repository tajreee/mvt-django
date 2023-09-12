# Proyek Django Pemrograman Berbasis Platform
Nama        : Tajri Mintahtihal Anhaar\
NPM         : 2206030312\
Kelas       : PBP F\
Kode Asdos  : VCY

## Pendahuluan
Repositori ini digunakan sebagai direktori tugas proyek Django mata kuliah Pemrograman Berbasis Platform (PBP) tahun 2022/2023 Ganjil

## Tautan Web Django
Link Adaptable: https://ngopy.adaptable.app/

## Pertanyaan dan Jawaban
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
    