
import './App.css'

function App() {
  const userName: string = "İpek";
  const userAge: number = 25; 
  const user: {name: string; age: number} = {name: userName, age: userAge}; //obje tanımlama
 
  const userNames: string[] = ["Ahmet", "Mehmet", "Ayşe"]; //dizi tanımlama

  function merhaba(name: string): string { //fonksiyon tanımlama
    return `Merhaba, ${name}!`;
  }
  console.log(merhaba(user.name));

  return (
    <>
     
      <h1>Merhaba {userName}!</h1>
      <p>Yaşınız: {userAge}</p>
      <p>Kullanıcı Bilgileri: İsim - {user.name}, Yaş - {user.age}</p>

      <h2>User Names</h2>
      <ul>
        {userNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))  }
      </ul>
    </>
  )
}

export default App
