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
      miniSearch: 'Search',
      library: 'Library',
      artists: 'Artists',
      songs: 'Songs',
      albums: 'Albums',
      playlists: 'Playlists',
      radios: 'Radios',
      emptyPlaylist: 'No playlists created yet',
    },
    menu: {
      language: 'Language',
      server: 'Server',
      serverLogout: 'Logout',
    },
    generic: {
      seeMore: 'See more',
    },
    theme: {
      label: 'Theme',
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },
    playlist: {
      headline: 'Playlist',
      songCount_zero: '{{count}} songs',
      songCount_one: '{{count}} song',
      songCount_other: '{{count}} songs',
      duration: 'about {{duration}}',
      refresh: 'Refresh playlists',
      buttons: {
        play: 'Play {{name}}',
        shuffle: 'Play {{name}} in shuffle mode',
        options: 'More options for {{name}}',
      },
      noSongList: 'This playlist does not have any songs!',
      form: {
        labels: {
          name: 'Name',
          comment: 'Comment',
          commentDescription: 'Write a short description of this playlist',
          isPublic: 'Public',
          isPublicDescription:
            'Select this option to make the playlist public. This will allow other users to view and access your playlist.',
        },
        create: {
          title: 'Create Playlist',
          button: 'Create',
          toast: {
            success: 'Playlist created successfully!',
            error: 'Failed to create playlist!',
          },
        },
        edit: {
          title: 'Edit Playlist',
          button: 'Update',
          toast: {
            success: 'Playlist updated successfully!',
            error: 'Failed to update playlist!',
          },
        },
        delete: {
          title: 'Are you sure you want to delete this playlist?',
          description: 'This action cannot be undone.',
          toast: {
            success: 'Playlist removed successfully!',
            error: 'Failed to remove playlist!',
          },
        },
        validations: {
          nameLength: 'Playlist name must be at least 2 characters.',
        },
      },
    },
    album: {
      headline: 'Album',
      buttons: {
        like: 'Like {{name}}',
        dislike: 'Remove like from {{name}}',
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
        },
      },
    },
    artist: {
      headline: 'Artist',
      buttons: {
        play: 'Play {{artist}} radio',
        shuffle: 'Play {{artist}} radio in shuffle mode',
        options: 'More options for {{artist}}',
      },
      info: {
        albumsCount_zero: '{{count}} albums',
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
        name: 'Name',
        albumCount: 'Album count',
        songCount: 'Song count',
        comment: 'Comment',
        public: 'Public',
      },
      buttons: {
        play: 'Play {{title}} by {{artist}}',
        pause: 'Pause {{title}} by {{artist}}',
      },
      lastPlayed: '{{date}} ago',
      pagination: {
        rowsPerPage: 'Rows per page',
        currentPage: 'Page {{currentPage}} of {{totalPages}}',
        screenReader: {
          firstPage: 'Go to first page',
          previousPage: 'Go to previous page',
          nextPage: 'Go to next page',
          lastPage: 'Go to last page',
        },
      },
      sort: {
        asc: 'Ascending',
        desc: 'Descending',
        reset: 'Reset',
      },
    },
    fullscreen: {
      noLyrics: 'No lyrics found',
      loadingLyrics: 'Searching for lyrics...',
      queue: 'Queue',
      playing: 'Playing now',
      lyrics: 'Lyrics',
      switchButton: 'Switch to fullscreen',
    },
    logout: {
      dialog: {
        title: 'Ready to say goodbye for now?',
        description: 'Confirm to logout.',
        cancel: 'Cancel',
        confirm: 'Continue',
      },
    },
    login: {
      form: {
        server: 'Server',
        description: 'Connect to your Subsonic server.',
        url: 'URL',
        urlDescription: 'This is your server URL',
        username: 'Username',
        usernamePlaceholder: 'Your username',
        password: 'Password',
        connect: 'Connect',
        connecting: 'Connecting...',
        validations: {
          url: 'Please enter a valid URL.',
          protocol: 'URL must start with http:// or https://',
          username: 'Please provide a username',
          usernameLength: 'Username must be at least 2 characters.',
          password: 'Please provide a password',
          passwordLength: 'Password must be at least 2 characters.',
        },
      },
    },
    toast: {
      server: {
        success: 'Server was saved successfully!',
        error: 'Server communication failed!',
      },
    },
    command: {
      inputPlaceholder: 'Search for an album, artist or song',
      noResults: 'No results found.',
      commands: {
        heading: 'Commands',
        pages: 'Go to page',
        theme: 'Change theme',
      },
      pages: 'Pages',
    },
    player: {
      noSongPlaying: 'No song playing',
      noRadioPlaying: 'No radio playing',
    },
    options: {
      playNext: 'Play next',
      addLast: 'Add last',
      download: 'Download',
      playlist: {
        add: 'Add to playlist',
        edit: 'Edit playlist',
        delete: 'Delete playlist',
        search: 'Find a playlist',
        create: 'New playlist',
        notFound: 'No playlist found',
      },
    },
    radios: {
      label: 'Radio',
      addRadio: 'Add Radio',
      table: {
        name: 'Name',
        homepage: 'Homepage URL',
        stream: 'Stream URL',
        actions: {
          edit: 'Edit radio',
          delete: 'Delete radio',
        },
        playTooltip: 'Play {{name}} radio',
        pauseTooltip: 'Pause {{name}} radio',
      },
      form: {
        create: {
          title: 'Add Radio',
          button: 'Save',
          toast: {
            success: 'Radio created successfully!',
            error: 'Failed to create radio!',
          },
        },
        edit: {
          title: 'Edit Radio',
          button: 'Update',
          toast: {
            success: 'Radio updated successfully!',
            error: 'Failed to update radio!',
          },
        },
        delete: {
          title: 'Are you sure you want to delete this radio station?',
          description: 'This action cannot be undone.',
          toast: {
            success: 'Radio removed successfully!',
            error: 'Failed to remove radio!',
          },
        },
      },
    },
    time: {
      hour: '{{hour}} hr',
      minutes: '{{minutes}} min',
      seconds: '{{seconds}} s',
    },
    server: {
      songCount_zero: '{{count}} songs',
      songCount_one: '{{count}} song',
      songCount_other: '{{count}} songs',
      folderCount_zero: '{{count}} folders',
      folderCount_one: '{{count}} folder',
      folderCount_other: '{{count}} folders',
      lastScan: 'Last scan: {{date}}',
      status: 'Status',
      management: 'Server management',
      buttons: {
        refresh: 'Refresh status',
        startScan: 'Quick Scan',
      },
    },
    downloads: {
      started: 'Download started.',
      failed: 'There was an error downloading your file.',
      completed: 'Your file has been downloaded.',
    },
    dayjs: {
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        m: '1 minute',
        mm: '%d minutes',
        h: '1 hour',
        hh: '%d hours',
        d: '1 day',
        dd: '%d days',
        M: '1 month',
        MM: '%d months',
        y: '1 year',
        yy: '%d years',
      },
    },
  },
}
