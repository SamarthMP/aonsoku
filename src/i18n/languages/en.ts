export const english = {
  translation: {
    home: {
      recentlyPlayed: 'Recently played',
      mostPlayed: 'Most played',
      recentlyAdded: 'Recently added',
      explore: 'Explore',
    },
    sidebar: {
      home: 'Home',
      search: 'Search...',
      library: 'Library',
      artists: 'Artists',
      songs: 'Songs',
      albums: 'Albums',
      playlists: 'Playlists',
      radios: 'Radios',
    },
    menu: {
      language: 'Language',
      server: 'Server',
      serverLogout: 'Logout',
    },
    generic: {
      seeMore: 'See more'
    },
    theme: {
      label: 'Theme',
      light: 'Light',
      dark: 'Dark',
      system: 'System'
    },
    playlist: {
      headline: 'Playlist',
      songCount_one: '{{count}} song',
      songCount_other: '{{count}} songs',
      duration: 'about {{duration}}',
      buttons: {
        play: 'Play {{name}}',
        shuffle: 'Play {{name}} in shuffle mode',
        options: 'More options for {{name}}',
      }
    },
    album: {
      headline: 'Album',
      buttons: {
        like: 'Like {{name}}',
        dislike: 'Remove like from {{name}}'
      },
      info: {
        about: 'About {{name}}',
        lastfm: 'Open in Last.fm',
        musicbrainz: 'Open in MusicBrainz',
      },
      more: {
        listTitle: 'More from this artist',
        discography: 'Artist Discography',
        genreTitle: 'More from {{genre}}',
      },
      list: {
        filter: {
          artist: 'Artist',
          genre: 'Genre',
          highest: 'Highest',
          favorites: 'Favorites',
          mostPlayed: 'Most Played',
          name: 'Name',
          random: 'Random',
          recentlyAdded: 'Recently Added',
          recentlyPlayed: 'Recently Played',
          releaseYear: 'Release Year',
        }
      }
    },
    artist: {
      headline: 'Artist',
      buttons: {
        play: 'Play {{artist}} radio',
        shuffle: 'Play {{artist}} radio in shuffle mode',
        options: 'More options for {{artist}}'
      },
      info: {
        albumsCount_one: '{{count}} album',
        albumsCount_other: '{{count}} albums',
      },
      topSongs: 'Top songs',
      recentAlbums: 'Recent albums',
      relatedArtists: 'Related artists',
    },
    table: {
      columns: {
        title: 'Title',
        artist: 'Artist',
        album: 'Album',
        year: 'Year',
        duration: 'Duration',
        plays: 'Plays',
        lastPlayed: 'Last played',
        bpm: 'BPM',
        bitrate: 'Bitrate',
        quality: 'Quality',
      },
      buttons: {
        play: 'Play {{title}} by {{artist}}',
        pause: 'Pause {{title}} by {{artist}}',
      },
      lastPlayed: '{{date}} ago'
    },
    fullscreen: {
      noLyrics: 'No lyrics found',
      queue: 'Queue',
      lyrics: 'Lyrics',
      switchButton: 'Switch to Fullscreen',
    },
    logout: {
      dialog: {
        title: 'Ready to say goodbye for now?',
        description: 'Confirm to logout.',
        cancel: 'Cancel',
        confirm: 'Continue',
      }
    },
    login: {
      form: {
        server: 'Server',
        description: 'Connect to your Subsonic Server.',
        url: 'URL',
        urlPlaceholder: 'Your server URL',
        username: 'Username',
        usernamePlaceholder: 'Your username',
        password: 'Password',
        connect: 'Connect',
      }
    },
    toast: {
      server: {
        success: 'Server was saved successfully!',
        error: 'Server communication failed!',
      }
    },
    command: {
      inputPlaceholder: 'Search for an album, artist or song',
      noResults: 'No results found.',
      commands: {
        heading: 'Commands',
        pages: 'Go to page',
        theme: 'Change theme'
      },
      pages: 'Pages',
    },
    player: {
      noSongPlaying: 'No song playing',
    },
    dayjs: {
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: 'a few seconds',
        m: "1 minute",
        mm: "%d minutes",
        h: "1 hour",
        hh: "%d hours",
        d: "1 day",
        dd: "%d days",
        M: "1 month",
        MM: "%d months",
        y: "1 year",
        yy: "%d years"
      }
    }
  }
}