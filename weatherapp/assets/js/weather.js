const submit = document.querySelector('.submit');
const where = document.getElementById('where');

submit.addEventListener('click', () => {
  const location = where.value.trim(); // 사용자가 입력한 위치 가져오기

  if (!location) {
    alert('위치를 입력해주세요!');
    return;
  }

  const apiKey = '996d30bc1fb906533c1b6de095a90306';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=kr&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('도시를 찾을 수 없습니다.');
      }
      return response.json(); // 응답을 JSON으로 변환
    })
    .then((data) => {
      console.log(data); // 응답 데이터 확인 (테스트)
    })
    .catch((error) => {
      console.error(error.message); // 에러 처리
      alert('날씨 정보를 가져오는 중 오류가 발생했습니다.');
    });
});
