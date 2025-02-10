# Thel: The Terminal Helper!

Yazılımcılar! bu araç sizler için, terminal üzerinde kullanacağınız thel'in özellikleri aşağıdaki gibidir;

Create project tree, generate default tree = node
```shell
thel new myprojectname
```

Create the python project tree.
```shell
thel new myprojectname --lang python
```

- new: yeni boş bir typescript projesi oluşturur. (benzeri: cargo new proje_adi)
- cdm: create directory and move in.

### bu proje hakkında

kullanılan loglama aracı: Logil
kullanılan test aracı: Jest
kullanılan tip kontrolü ve derleme aracı: Typescript + Swc
kullanılan programlama dili: Node.js

## yapılacaklar listesi

- swc yapılandırması eklenecek ve babel ile minify edilecek build işleminde proje.
- tests yapılandırması eklenecek jest yardımıyla.