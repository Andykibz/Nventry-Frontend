const deslugify = (_slug: string) => {    
    return _slug.replace("_", " ").replace(
        /\w\S*/g,
        (txt : string) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export default{ deslugify }