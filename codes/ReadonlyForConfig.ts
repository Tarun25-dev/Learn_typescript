type Config = {
    apiURL: string;
    version: string;
};

const Config: Readonly<Config> = {
    apiURL: "https://api.example.com/",
    version: "1.1"
};

console.log(Config);

// { apiURL: 'https://api.example.com/', version: '1.1' }