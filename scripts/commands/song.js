module.exports = {
  config: {
    name: "song",
    version: "1.1.5",
    aliases: [ "music", "play"],
    credits: "soikot",
    countDown: 5,
    hasPermssion: 0,
    description: "Download audio from YouTube",
    category: "media",
    commandCategory: "media",
    usePrefix: true,
    prefix: true,
    usages: "{pn} [<song name>|<song link>]:"+ "\n   Example:"+"\n{pn} chipi chipi chapa chapa"
  },
	
const express = require('express');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// ডাউনলোড এবং রূপান্তরের জন্য রুট তৈরি
app.get('/download', async (req, res) => {
  const videoUrl = req.query.url; // ইউজারের সরবরাহকৃত YouTube ভিডিও URL

  if (!videoUrl) {
    return res.status(400).send('YouTube ভিডিওর URL প্রয়োজন');
  }

  const tempFilePath = path.resolve(__dirname, 'temp_audio.mp4');
  const output = path.resolve(__dirname, 'song.mp3');

  try {
    // YouTube থেকে অডিও ডাউনলোড
    const stream = ytdl(videoUrl, { quality: 'highestaudio' });
    const writeStream = fs.createWriteStream(tempFilePath);

    stream.pipe(writeStream);

    writeStream.on('finish', () => {
      // MP3 তে রূপান্তর করা
      ffmpeg(tempFilePath)
        .audioBitrate(128)
        .save(output)
        .on('end', () => {
          res.download(output, (err) => {
            if (err) {
              throw err;
            }

            // সাময়িক এবং আউটপুট ফাইল মুছে ফেলা
            fs.unlinkSync(tempFilePath);
            fs.unlinkSync(output);
          });
        });
    });

    writeStream.on('error', (err) => {
      throw err;
    });
  } catch (error) {
    res.status(500).send('রূপান্তর প্রক্রিয়ায় ত্রুটি ঘটেছে: ' + error.message);
  }
});

// সার্ভার চালু করা
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
