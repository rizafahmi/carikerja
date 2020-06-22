# Carikerja

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Daftar developer keren yang terpaksa di PHK karena dampak pandemi COVID-19.

Yang diperlukan (versi minimum): [Node.js](https://nodejs.org) versi 10.

```shell
git clone https://github.com/rizafahmi/carikerja.git
npm install
npm run dev
```

lalu buka alamat `localhost:3000`.

Untuk menambahkan data developer silakan ubah file `src/data/people.js`. Data social media dapat dibuat multi dengan mengupdate menjadi bentuk object, seperti contoh:

```javascript
    social_media: {
        Linkedin : 'https://www.linkedin.com/in/foo/',
        Github   : 'https://github.com/foo'
    },
```

dan untuk menambahkan data perusahaan yang masih melakukan hiring silakan ubah file `src/data/employer.js`.

