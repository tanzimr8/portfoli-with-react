const Button = ({btn_type,url,children})=>{
    return(
        <div className="cta">
            <a href={url} className={`my-3 btn ${btn_type} `}>{children}</a>
        </div>
    );
}

export default  Button;