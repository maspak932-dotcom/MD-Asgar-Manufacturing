import https from 'https';

const url = 'https://images.unsplash.com/photo-1581553680321-4fffae59f5b2';

https.get(url, (res) => {
  console.log(res.statusCode);
  process.exit(0);
});
