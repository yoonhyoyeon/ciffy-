import Home from '@/container/Home';

export const metadata = {
  title: 'Home'
}

async function login(id, pw, method) {
  const url = `https://auth.imsejong.com/auth?method=${method}`;

  const payload = {
    id: id, // 학번
    pw: pw, // 비밀번호
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}



const HomePage = async() => {

  // 사용 예시
  console.log(await login("21011189", "a..", "Manual"));
  return <Home />
};

export default HomePage;
