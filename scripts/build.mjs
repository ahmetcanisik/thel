/**
 * @name Thel Builder Script
 * @version 0.0.1
 * @description Build thel
 * @author ahmetcanisik
 */

/*
Tricks:

--publish flag'ı ile önce npmjs'e projeyi yüklüyoruz
ardından *.js ve *.d.ts dosyalarını silip github'a yüklüyoruz.
*/

/*
Roadmap:

- dist içerisine taşınmayacak çıktı dosyaları src içerisinde kalacaklar.
bundan dolayıdırki package.json dosyasında dist leri kaldırıp yerine
- .npmignore dosyasına src altındaki *.ts dosyalarının eklenmemesi gerektiğini belirtiyoruz.
*/