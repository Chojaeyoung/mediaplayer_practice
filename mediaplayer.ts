abstract class CommonPropertyMethod {
    fileName: string;
    filePath: string;
    fileSize: number;
    fileType: string;
    deleteFile(): void {
        console.log(this.fileName, "delete file");
    }
}

interface MusicInformation {
    singer: string;
    album: string;
    releaseDate: string;
    company: string;
    showMusicInformaion(): void;
};

interface MovieInformation {
    actor: string;
    director: string;
    title: string;
    releaseDate: string;
    showMovieInformation(): void;
}

interface PictureInformation {
    dimension: string;
    date: string;
    showPictureInformation(): void;
}

interface PlayAndStop {
    play(): void;
    stop(): void;
};

interface OpenAndClose {
    open(): void;
    close(): void;
}

class Music extends CommonPropertyMethod implements MusicInformation, PlayAndStop {
    constructor(name: string, path: string, size: number, type: string, public singer = "unknown", public album = "unknown", public releaseDate = "unknown", public company = "unknown") {
        super();
        this.fileName = name;
        this.filePath = path;
        this.fileSize = size;
        this.fileType = type;
        this.singer = singer;
        this.album = album;
        this.releaseDate = releaseDate;
        this.company = company;
    }
    play(): void {
        console.log(this.fileName, "music file play");
    }
    stop(): void {
        console.log(this.fileName, "music file stop");
    }
    showMusicInformaion(): void {
        console.info("====", this.fileName, "Music information ====");
        console.log("singer : ", this.singer);
        console.log("album : ", this.album);
        console.log("releaseDate : ", this.releaseDate);
        console.log("company : ", this.company);
    }
}

class Movie extends CommonPropertyMethod implements MovieInformation, PlayAndStop {
    constructor(name: string, path: string, size: number, type: string, public actor = "unknown", public director = "unknown", public title = "unknown", public releaseDate = "unknown") {
        super();
        this.fileName = name;
        this.filePath = path;
        this.fileSize = size;
        this.fileType = type;
        this.title = title;
        this.director = director;
        this.actor = actor;
        this.releaseDate = releaseDate;
    }
    play(): void {
        console.log(this.fileName, "movie file play");
    }
    stop(): void {
        console.log(this.fileName, "movie file stop");
    }
    showMovieInformation(): void {
        console.info("====", this.fileName, "Movie information ====");
        console.log("title : ", this.title);
        console.log("director : ", this.director);
        console.log("actor : ", this.actor);
        console.log("releaseDate : ", this.releaseDate);

    }
}

class Picture extends CommonPropertyMethod implements PictureInformation, OpenAndClose {
    constructor(name: string, path: string, size: number, type: string, public dimension = "unknown", public date = "unknown") {
        super();
        this.fileName = name;
        this.filePath = path;
        this.fileSize = size;
        this.fileType = type;
        this.dimension = dimension;
        this.date = date;
    }
    open(): void {
        console.log(this.fileName, "Picture file open");
    }
    close(): void {
        console.log(this.fileName, "Picture file close");
    }
    showPictureInformation(): void {
        console.info("====", this.fileName, "Picture information ====");
        console.log("dimension : ", this.dimension);
        console.log("date : ", this.date);
    }
}

/* working test code */

let musicHell = new Music("go to the hell.mp3", "D://", 1024, "mp3");
let musicStar = new Music("tingkle tingkle.mp3", "D://", 2048, "ogg", "baby", "baby start", "2016/12/23", "star entertainment");

let movieInception = new Movie("Inception_blueray", "D://movie/", 4000000, "mpk", "Leonardo DiCaprio, Watanabe Ken, Joseph Gordon-Levitt, Marion Cotillard, Ellen Page, Tom Hardy", "Christopher Nolan", "Inception", "2010");
let movieScream = new Movie("Afraid_move_scream", "D://movie/", 200000, "avi");

let pictureMountain = new Picture("Hanrasan_photo", "D://picture/", 2048, "jpeg", "2048x1024", "2017/01/01");
let pictureTrain = new Picture("KTX_photo", "D://picture/", 2048, "jpeg", "2048x1024", "2017/01/02");


musicHell.play();
musicHell.stop();
musicHell.showMusicInformaion();
musicHell.deleteFile();

musicStar.play();
musicStar.stop();
musicStar.showMusicInformaion();
musicStar.deleteFile();

movieInception.play();
movieInception.stop();
movieInception.showMovieInformation();
movieInception.deleteFile();

movieScream.play();
movieScream.stop();
movieScream.showMovieInformation();
movieScream.deleteFile();

pictureMountain.open();
pictureMountain.close();
pictureMountain.showPictureInformation();
pictureMountain.deleteFile();

pictureTrain.open();
pictureTrain.close();
pictureTrain.showPictureInformation();
pictureTrain.deleteFile();