<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Halo Nama Saya {{ nama }}</h1>
    <button class="btn" @click="gantiNama">Ganti Nama</button>

    <h2>{{ totalBelanja }}</h2>
    <button class="btn" @click="gantiQuantity">Ganti Qty</button>
    <button class="btn-reset" @click="reset">Reset</button>
    
    <h3>Mahasiswa</h3>
    
    <button class="btn-tambah">Tambah Mahasiswa</button>
    <div class="input">
      <label for="name">Name</label>
      <input type="text" name="name" id="name">
      <label for="jurusan">Jurusan</label>
      <input type="text" name="jurusan" id="jurusan">
    </div>
      <div class="bg-tbl">
        <table border="1" align="center">
        <thead>
          <th>No</th>
          <th>Nama</th>
          <th>Jurusan</th>
          
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{{ mhs[0]["nama"] }}</td>
            <td>{{ mhs[0]["jurusan"] }}</td>
            <button class="btn-hapus">Hapus</button>
          <button class="btn-edit">Edit</button>
          </tr>
          <tr>
            <td>2</td>
            <td>{{ mhs[1]["nama"] }}</td>
            <td>{{ mhs[1]["jurusan"] }}</td>
            <button class="btn-hapus">Hapus</button>
          <button class="btn-edit">Edit</button>
          </tr>
          <tr>
            <td>3</td>
            <td>{{ mhs[2]["nama"] }}</td>
            <td>{{ mhs[2]["jurusan"] }}</td>
            <button class="btn-hapus">Hapus</button>
          <button class="btn-edit">Edit</button>
          </tr>
          <tr>
            <td>3</td>
            <td>{{ mhs[3]["nama"] }}</td>
            <td>{{ mhs[3]["jurusan"] }}</td>
            <button class="btn-hapus">Hapus</button>
          <button class="btn-edit">Edit</button>
          </tr>
        </tbody>
      </table>
      </div>
      <hr>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
    //   HelloWorld
    // }
    
    
    data : function(){
      return{
        nama : "Kodehive",
        anggota : [ "Bayu", "Eka", "Rangga"],
        quantity : 5,
        mhs: [
          {
            nama: "Nanang",
            jurusan: "Teknik Komputer & Jaringan"
          },
          {
            nama: "Adam",
            jurusan: "Rekayasa Perangkat Lunak"
          },
          {
            nama: "Ardi",
            jurusan: "Teknik Informatika"
          },
          {
            nama: "Aswin",
            jurusan: "Teknik Informatika"
          }
        ]
      }
      
    },
    methods: {
      // ganti nama
      gantiNama: function(){
        if (this.nama == "Kodehive") {
          this.nama = "Nanang";
        } else {
          
          this.nama = "Kodehive";
        }
      },

      // ganti quantity
      gantiQuantity: function(){
        this.quantity++
      },
      reset: function(){
        this.quantity = 5
      }

    },

    computed: {
      totalBelanja: function(){
        return this.quantity * 1000
      }
    }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  box-sizing: border-box;
  /* height: 100%; */
  /* width: 100%; */
}

.btn {
  background-color: rgb(49, 195, 146);
  border-radius: 5px;
  border: none;
  padding: 10px 10px;
  color: white;
  cursor: pointer;
  margin-left: 5px;
}

.btn-reset{
  background-color: rgb(255, 198, 41);
  border-radius: 5px;
  border: none;
  padding: 10px 10px;
  color: white;
  cursor: pointer;
  margin-left: 5px;
}

.bg-tbl{
  color: rgb(36, 39, 41);
}

table {
  border: 1px solid rgb(34, 30, 30);
  padding: 10px 10px;
  border-spacing: 0;
  border-collapse:collapse;
}

th, td{
  padding: 10px 10px;
}

h3 {
  margin-top: 30px;
  letter-spacing: 3px;
  font-size: 25px;
}

.btn-tambah{
  color: aliceblue;
  background: rgb(76, 49, 195);
  border: none;
  padding: 7px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-right: 320px;
  cursor: pointer;
}

.btn-hapus, .btn-edit{
  cursor: pointer;
  margin-left: 3px;
  margin-right: 3px;
  border: none;
  border-radius: 4px;
  color: aliceblue;
  padding: 3px 7px;
  margin: 6px;
}

.btn-hapus{
  background: red;
}

.btn-edit{
  background: green;
}

label{
  margin-right: 4px;
  margin-left: 4px;
}

input{
  margin-bottom: 5px;
}

</style>
