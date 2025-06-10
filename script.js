// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Tombol kembali dari player ke home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elemen untuk Halaman Detail Lagu (tidak akan langsung digunakan saat klik lagu, tapi tetap di-load)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Tombol play di halaman detail

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Tambahkan ini
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Tambahkan ini

// App State
let songs = [
    {
        id: 1,
        title: "All To Well (10 Minute Version)",
        artist: "Taylor Swift",
        album: "Red (Taylor's Version)",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273318443aab3531a0558e79a4d",
        audioSrc: "audio/All Too Well.mp3",
        videoBgSrc: "videos/all too well.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 0.4, text: "And I was never good at tellin' jokes, but the punch line goes" },
            { time: 6.5, text: "I'll get older, but your lovers stay my age" },
            { time: 12, text: "From when your Brooklyn broke my skin and bones" },
            { time: 17, text: "I'm a soldier who's returning half her weight" },
            { time: 22, text: "And did the twin flame bruise paint you blue?" },
            { time: 28, text: "Just between us, did the love affair maim you too?" },
            { time: 32.7, text: "Cause in this city's barren cold" },
            { time: 36.5, text: "I still remember the first fall of snow" },
            { time: 41.5, text: "And how it glistened as it fell" },
            { time: 46, text: "I remember it all too well" },
            { time: 53, text: "Just between us, did the love affair maim you all too well?" },
            { time: 64, text: "Just between us, do you remember it all too well?" },
            { time: 74, text: "Just between us (just between us) I remember it all too well (wind in my hair)" },
            { time: 82, text: "(I was there, I was there)" },
            { time: 85, text: "(Down the stairs, I was there, I was there)" },
        ]
    },
    {
        id: 2,
        title: "Backburner",
        artist: "NIKI",
        album: "Nicole",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b27389aa3d00d339b8948374782b",
        audioSrc: "audio/backburner.mp3",
        videoBgSrc: "videos/backburner.mp4",
        lyrics: [
            { time: 0, text: "But I know in a week or so" },
            { time: 2, text: "You'll fade away again" },
            { time: 4, text: "And I wish that I cared" },
            { time: 7.6, text: "Hey, are you still there?" },
            { time: 10.5, text: "Good" },
            { time: 12.6, text: "Maybe I'm just not better than this, I haven't tried" },
            { time: 18.2, text: "'Cause maybe you'll finally choose me after you've had more time" },
            { time: 24.4, text: "I thought I was a fast learner" },
            { time: 27.2, text: "But guess I won't ever mind, guess I won't ever mind" },
            { time: 35.2, text: "Maybe I blame my mother bleeding into my stride" },
            { time: 41, text: "Maybe it was my father and his wandering eyes" },
            { time: 46, text: "(It's their fault that)" },
            { time: 47.1, text: "I'll always be in your corner" },
            { time: 50.3, text: "'Cause I don't feel alive 'til I'm burnin' on your backburner, oh-oh" },
            { time: 57.6, text: "(Backburner, your backburner)" },
            { time: 61.7, text: "Oh, and I know that it's sad that I settle for the backburner, oh-oh (your backburner)" },
            { time: 71.5, text: "(Your backburner, your backburner)" },
            { time: 73.4, text: "Oh, guess I won't ever mind crisping up on your backburner, oh-oh (your backburner)" },
            { time: 80, text: "(Backburner, your backburner)" },
            { time: 84, text: "Oh, as long as you still think of me, oh, oh-oh (backburner, backburner)"},
        ]
    },
    {
        id: 3,
        title: "bloodline",
        artist: "Ariana Grande",
        album: "Thank U, Next",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b27379826f235cf8bc00256db3a6",
        audioSrc: "audio/bloodline.mp3",
        videoBgSrc: "videos/bloodline.mov", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 0, text: "Say I know what you want, what you want from me" },
            { time: 3.1, text: "I know what you think, what you think you see (so what you think)" },
            { time: 6.3, text: "I know what you looking for, but I'm complete (yee)" },
            { time: 9.5, text: "I know what you need, but it won't be me" },
            { time: 12.4, text: "I know what you want, what you want from me" },
            { time: 16, text: "I know what you think, what you think you see" },
            { time: 19, text: "I know what you looking for, but I'm complete" },
            { time: 22, text: "I know what you need, but it won't be me (but it won't be me)" },
            { time: 26, text: "Don't want you in my bloodline, yeah (don't want you in my bloodline)" },
            { time: 29, text: "Just wanna have a good time, yeah (just tryna have a good time)" },
            { time: 32, text: "And no need to apologize, no (no)" },
            { time: 35, text: "But you gon' have to let this shit go (yeah, yeah)" },
            { time: 38, text: "Don't want you in my bloodline, yeah" },
            { time: 41, text: "Not tryna make you all mine, yeah" },
            { time: 44, text: "And no need to apologize, no" },
            { time: 47, text: "But you gon' have to let this shit go, yeah"}
        ]
    },
    {
        id: 4,
        title: "Clarity",
        artist: "Zedd feat. Foxes",
        album: "Clarity",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273941dd3b3343d9cb9329d37bf",
        audioSrc: "audio/Clarity.mp3",
        videoBgSrc: "videos/clarity.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 0.5 , text: "'Cause you are the piece of me" },
            { time: 4.3, text: "I wish I didn't need" },
            { time: 8.3, text: "Chasing relentlessly" },
            { time: 11.6, text: "Still fight and I don't know why" },
            { time: 15.5, text: "If our love is tragedy" },
            { time: 19.5, text: "why are you my remedy?" },
            { time: 23, text: "If our love's insanity" },
            { time: 27, text: "why are you my clarity?" },
            { time: 60.5, text: "If our love is tragedy" },
            { time: 65, text: "why are you my remedy?" },
            { time: 68, text: "If our love's insanity" },
            { time: 72, text: "why are you my clarity?" },
        ]
    },    
    {
        id: 5,
        title: "High Five",
        artist: "Sigrid",
        album: "Raw",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273ef0d29efc80987efba1a343d",
        audioSrc: "audio/High Five.mp3",
        videoBgSrc: "videos/high five.mp4",
        lyrics: [
            { time: 0, text: "A-a-alright, don't you get tired of looking for high fives?" },
            { time: 6.1, text: "A-a-alright, don't you get tired of looking for high fives?" },
            { time: 12.3, text: "A-a-alright, don't you get tired of, don't you get tired of)" },
            { time: 20, text: "And you wonder why, wonder why" },
            { time: 26.4, text: "No one's by your side, by your side" },
            { time: 29.5, text: "When the room goes quiet" },
            { time: 32, text: "Oh, everybody loves a show" },
            { time: 35, text: "Lights on, they all go home" },
            { time: 38, text: "You won't let anybody close" },
            { time: 41, text: "That high five is all you got" },
            { time: 44, text: "Ooh, they keep saying you're the best" },
            { time: 48, text: "You ask and they say, Yeah!" },
            { time: 51, text: "Ooh, when you add up what is left" },
            { time: 54, text: "That high five is all you got" }
        ]
    },
    {
        id: 6,
        title: "La La Lost You",
        artist: "NIKI",
        album: "NIKI Accoustic Season: Head in the Clouds II",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b27347669a9be7d201ea97bbd3ee",
        audioSrc: "audio/la la lost you.mp3",
        videoBgSrc: "videos/la la lost you.mp4",
        lyrics: [
            { time: 0.9, text: "Feelin' low on the low" },
            { time: 3.3, text: "Drivin' through NoHo" },
            { time: 5.5, text: "If I'm honest, I'd call" },
            { time: 7.8, text: "But I'm trying to let go" },
            { time: 10.2, text: "And I hope you're happy" },
            { time: 12.7, text: "Livin' life in taxis" },
            { time: 15, text: "But you'll always have me" },
            { time: 17.4, text: "You'll always have me" },
            { time: 21, text: "All my demons run wild" },
            { time: 25.7, text: "All my demons have your smile" },
            { time: 30, text: "In the city of angels" },
            { time: 34.8, text: "In the city of angels" },
            { time: 40, text: "Hope New York holds you" },
            { time: 44.8, text: "Hope it holds you like I do" },
            { time: 48.8, text: "While my demons stay faithful" },
            { time: 54.2, text: "In the city of angels" }
        ]
    },
    {
        id: 7,
        title: "Landslide",
        artist: "Oh Wonder", 
        album: "Landslide",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273e9aa670a5034065bf2ef69c6", 
        audioSrc: "audio/Landslide.mp3",
        videoBgSrc: "videos/somebodys_pleasure_bg.mp4",
        lyrics: [
            { time: 3.2, text: "I know it hurts sometimes but" },
            { time: 6.4, text: "You'll get over it" },
            { time: 8.9, text: "You'll find another life to live" },
            { time: 11.5, text: "I know you'll get over it" },
            { time: 15, text: "I know you're sad and tired" },
            { time: 17.5, text: "You've got nothing left to give" },
            { time: 20.2, text: "But you'll find another life to live" },
            { time: 23.3, text: "I know you'll get over it" },
            { time: 26.5, text: "So when you're caught in a landslide" },
            { time: 29.6, text: "I'll be there for you, I'll be there for you" },
            { time: 32.6, text: "And in the rain give you sunshine" },
            { time: 35.5, text: "I'll be there for you, I'll be there for you" },
            { time: 38.4, text: "And every time that you're lonely" },
            { time: 41, text: "And every time that you feel alone" },
            { time: 43.7, text: "You should know" },
            { time: 44, text: "I'll be there for you, I'll be there for you" },
            { time: 47.1, text: "I'll be there for you, you know" }
        ]
    },
    {
        id: 8,
        title: "Pernah Dicinta",
        artist: "Elsa Japasal",
        album: "Pernah Dicinta",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273f923993685ae246ac2c46505",
        audioSrc: "audio/pernah dicinta.mp3",
        videoBgSrc: "videos/pernah dicinta.mp4",
        lyrics: [
            { time: 0, text: "Tak mengapa jika nanti kau lupa tentang aku" },
            { time: 8.8, text: "Tak mengapa jika ku bukan bagian di hidupmu" },
            { time: 17.7, text: "Abaikan saja air mata dan tangisku" },
            { time: 25.8, text: "Nanti juga akan mereda, akan berhenti semoga" },
            { time: 34.5, text: "Silakan ambil kembali cinta yang telah kau beri" },
            { time: 43.3, text: "Silakan hapus kenangan jika itu buatmu tenang" },
            { time: 51.8, text: "Tapi izinkan ku simpan yang paling membekas di hati" },
            { time: 59.8, text: "Meski semua sementara, kau buatku merasa pernah dicinta" },
            { time: 73.8, text: "Hanya saja pernah ku meyakinkan " },
            { time: 81.4, text: "Hati tuk hanya bisa jatuh cinta" },
            { time: 87, text: "Satu kali saja dan kamulah yang kupilih" },
            { time: 95.7, text: "Silakan ambil kembali cinta yang telah kau beri" },
            { time: 104, text: "Silakan hapus kenangan jika itu buatmu tenang" },
            { time: 113, text: "Tapi izinkan ku simpan yang paling membekas di hati" },
            { time: 121.3, text: "Meski semua sementara, kau buatku merasa pernah dicinta" },
            { time: 138.7, text: "Meski semua sementara, kau buatku merasa pernah dicinta" },
            { time: 156, text: "Pernah dicinta" },
        ]
    },
    {
        id: 9,
        title: "Say It - Illenium Remix",
        artist: "Flume feat. Tove Lo",
        album: "Skin: The Remixes",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b2734d5292e0cf0ca08ac67c8ee1",
        audioSrc: "audio/say it.mp3",
        videoBgSrc: "videos/say it.mp4",
        lyrics: [
            { time: 0, text: "Don’t doubt me babe, you make me wanna change" },
            { time: 6.7, text: "Break my bed to make me wanna stay, I can't" },
            { time: 13.2, text: "Bite me babe you make me love the pain" },
            { time: 19.2, text: "Break my bed to make me wanna stay, I can’t" },
            { time: 26.5, text: "When you say it like that oh, oh, oh, oh" },
            { time: 33, text: "Got me falling right back oh, oh, oh, oh, mmm" },
            { time: 39.6, text: "When you say it like that oh, oh, oh, oh" },
            { time: 46, text: "Let me fuck you right back oh, oh, oh, oh" },
            { time: 50.7, text: "Let me fuck you right back oh, oh, oh, oh" },
            { time: 57.1, text: "When you say it, say it, oh ,oh ,oh, oh" },
            { time: 63.4, text: "Let me fuck you right back oh, oh, oh, oh" },
            { time: 70, text: "When you say it, say it, oh, oh ,oh, oh, mmm" },
            { time: 78, text: "When you say it like that oh, oh, oh, oh" },
            { time: 82.8, text: "When you say it, say it" },
            { time: 84.6, text: "Got me falling right back, oh, oh, oh, oh" },
            { time: 89.3, text: "Let me fuck you right back" },
            { time: 91, text: "When you say it like that oh, oh, oh, oh" },
            { time: 95.7, text: "When you say it, say it" },
            { time: 97, text: "Let me fuck you right back, oh, oh, oh, oh" },
            { time: 101, text: "mmm"}
        ]
    },
    {
        id: 10,
        title: "Surat Cinta Untuk Starla",
        artist: "Virgoun",
        album: "Single",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273cf6af54752ff67e6ce8f86a1",
        audioSrc: "audio/SCUS.mp3",
        videoBgSrc: "videos/SCUS.mp4",
        lyrics: [
            { time: 0, text: "Ku tuliskan kenangan tentang" },
            { time: 4, text: "Caraku menemukan dirimu" },
            { time: 9.6, text: "Tentang apa yang membuatku mudah" },
            { time: 14, text: "Berikan hatiku padamu" },
            { time: 19.8, text: "Takkan habis sejuta lagu" },
            { time: 24, text: "Untuk menceritakan cantikmu" },
            { time: 29.6, text: "'kan teramat panjang puisi" },
            { time: 33.8, text: "'tuk menyuratkan cinta ini" },
            { time: 38, text: "Telah habis sudah cinta ini" },
            { time: 42.8, text: "Tak lagi tersisa untuk dunia" },
            { time: 47.9, text: "Karena telah ku habiskan" },
            { time: 51, text: "Sisa cintaku hanya untukmu" }
        ]
    },
    {
        id: 11,
        title: "Tapi Diterima",
        artist: "Nadin Amizah",
        album: "Untuk Dunia, Cinta, dan Kotornya",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b27394847679fe7b10e27d9803f5",
        audioSrc: "audio/tapi diterima.mp3",
        videoBgSrc: "videos/tapi diterima.mp4",
        lyrics: [
            { time: 1.7, text: "Sempurna saat sedang mencoba" },
            { time: 9, text: "Menjadi semua yang ku minta" },
            { time: 16.5, text: "Belum pernah aku berusaha sebegitu" },
            { time: 24, text: "Tapi di tanganmu aku tumbuh" },
            { time: 44.8, text: "Sebuah bejana yang selalu menungguku mengisinya penuh" },
            { time: 55.8, text: "Entah dengan air entah dengan tangis" },
            { time: 63.3, text: "Terkadang cairan yang terlanjur basi" },
            { time: 70.5, text: "Banyak waktu racun tapi diterima" },
            { time: 78.4, text: "Siapapun aku kau tangan yang terbuka" },
            { time: 88, text: "Sembuhku untukku untukmu untuk kita" },
            { time: 103, text: "Sembuhku untukku untukmu untuk semua" },
            { time: 118, text: "Sembuhku untukku untukmu untuk kita" },
            { time: 133, text: "Sembuhku untukku untukmu untuk semua" },
            { time: 153.5, text: "Untuk aku" },
            { time: 157.5, text: "Untuk semua" }
        ]
    }

];
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Pastikan detail page disembunyikan
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Sembunyikan video background
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
    pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Tampilkan video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Perubahan Penting di sini ---
        // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Langsung pindah ke halaman pemutar musik
        });

        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
            // Hanya aktifkan video background jika kita di halaman home
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Sembunyikan video background hanya jika kita di halaman home
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
                backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Hapus kelas warna background body
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Panggil fungsi renderLyrics
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Bersihkan container lirik
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time);
        span.classList.add('lyric-line');
        lyricsContainer.appendChild(span);

        const spacer = document.createElement('div');
        spacer.style.height = '1%';
        lyricsContainer.appendChild(spacer);
    });
}

lyricsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('lyric-line')) {
        const time = parseFloat(e.target.dataset.time);
        audioPlayer.currentTime = time;
        playTrack(); // <-- ini akan play dan update ikon juga
    }
});

// Highlight lirik aktif saat audio diputar
if (audioPlayer) {
    audioPlayer.addEventListener('timeupdate', () => {
        const current = audioPlayer.currentTime;
        const lines = Array.from(lyricsContainer.querySelectorAll('.lyric-line'));
        lyricsData.forEach((line, i) => {
            const nextLineTime = lyricsData[i + 1]?.time || Infinity;
            const lineEl = lines[i];
            if (current >= line.time && current < nextLineTime) {
                lineEl.classList.add('active');
            } else {
                lineEl.classList.remove('active');
            }
        });
    });
}

function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function togglePlayPause() {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
}



const volumeSlider = document.getElementById('volumeSlider');
let lastVolume = 1;

// SHORTCUT KEYBOARD
document.addEventListener('keydown', function(event) {
    // Space = Play/Pause
    if (event.code === 'Space') {
        event.preventDefault();
        togglePlayPause();
        return;
    }

    // Shortcut lain
    if (!event.shiftKey && !event.ctrlKey) return;

    switch (event.code) {
        case 'ArrowRight':
            event.preventDefault();
            if (!isNaN(audioPlayer.duration)) {
                audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 5);
                console.log('Fast forward +5s');
            }
            break;
        case 'ArrowLeft':
            event.preventDefault();
            audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 5);
            console.log('Rewind -5s');
            break;
        case 'ArrowLeft':
            event.preventDefault();
            prevTrack();
            break;
        case 'ArrowRight':
            event.preventDefault();
            nextTrackLogic();
            break;
        case 'ArrowUp':
            event.preventDefault();
            setVolume(audioPlayer.volume + 0.05);
            break;
        case 'ArrowDown':
            event.preventDefault();
            setVolume(audioPlayer.volume - 0.05);
            break;
        case 'KeyM':
            event.preventDefault();
            if (audioPlayer.muted || audioPlayer.volume === 0) {
            // Unmute
            const restoreVol = lastVolume > 0 ? lastVolume : 0.5; // default kalau belum ada
            setVolume(restoreVol);
            } else {
            // Mute dan simpan volume sebelumnya
            lastVolume = audioPlayer.volume;
            setVolume(0);
            }
            break;
        case 'KeyR':
            event.preventDefault();
            isRepeat = !isRepeat;
            updateRepeatButtonUI();
            break;
        case 'KeyS':
            event.preventDefault();
            isShuffle = !isShuffle;
            updateShuffleButtonUI();
            break;
    }
});

// TOGGLE MUTE FUNCTION
function toggleMute() {
    audioPlayer.muted = !audioPlayer.muted;

    if (audioPlayer.muted) {
        lastVolume = audioPlayer.volume;
        playerVolumeSlider.value = 0;
    } else {
        playerVolumeSlider.value = lastVolume * 100;
        audioPlayer.volume = lastVolume;
    }

    updateMuteIcon();
}

// UPDATE MUTE ICON (jika ada)
function updateMuteIcon() {
    const muteBtn = document.getElementById('muteButton'); // sesuaikan ID
    if (!muteBtn) return;
    muteBtn.innerHTML = audioPlayer.muted
        ? '<i class="fas fa-volume-mute"></i>'
        : '<i class="fas fa-volume-up"></i>';
}


function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
            // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
        if (highlightedLine) {
            const containerHeight = lyricsContainer.clientHeight;
            const lineOffset = highlightedLine.offsetTop;
            const lineHeight = highlightedLine.offsetHeight;

            const scrollTop = lineOffset - (containerHeight / 2) + (lineHeight / 2);

            lyricsContainer.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
            });
        }
    }
});

function setVolume(vol) {
    vol = Math.max(0, Math.min(1, vol)); // Clamp
    audioPlayer.volume = vol;
    playerVolumeSlider.value = vol; // ⬅️ langsung pakai skala 0–1
    if (vol > 0) {
        lastVolume = vol;
        audioPlayer.muted = false;
    } else {
        audioPlayer.muted = true;
    }
    updateMuteIcon();
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', function () {
    const vol = parseFloat(this.value); // ⬅️ TIDAK PERLU dibagi 100
    setVolume(vol);
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener('click', showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Tambahkan log untuk inisialisasi
    console.log("Songs array length:", songs.length); // Periksa jumlah lagu
    console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

    renderSongList(); // Ini yang merender daftar lagu
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Ini akan ditampilkan jika array songs kosong
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Mulai dari halaman daftar lagu
    console.log("Initialization complete."); // Log selesai inisialisasi
}

init();