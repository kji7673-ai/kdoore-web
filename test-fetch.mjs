async function check() {
  try {
    const res = await fetch('http://localhost:3000/api/test-homepage');
    const text = await res.text();
    console.log('STATUS:', res.status);
    console.log('RESPONSE:', text);
  } catch (e) {
    console.error('FETCH ERROR:', e);
  }
}
check();
