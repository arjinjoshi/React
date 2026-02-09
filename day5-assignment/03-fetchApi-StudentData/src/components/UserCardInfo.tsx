
import { type UserData } from "./interface";

interface UserCardInfoProps {
    userData: UserData
}

const UserCardInfo = ({ userData}: UserCardInfoProps) => {
    const {name, username, email,address, phone,website, company} = userData;
    const {street, suite, city, zipcode, geo} = address;
    const {lat, lng} = geo;
    const {catchPhrase, bs} = company
  return (
    <div>
        
            
        <div className="flex flex-col gap-1 justify-center">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACUCAMAAAAAoYNxAAAAbFBMVEX///8AAADb29v5+fnw8PA/Pz9PT0+Kioq6urqlpaXi4uKrq6v29va2trbp6em/v79tbW0cHBydnZ0uLi7U1NQKCgpycnLMzMw5OTl5eXmVlZVfX18zMzMoKCjGxsZnZ2eCgoJXV1dGRkYTExMXMJP9AAAEzklEQVR4nO2bWXuqMBCGS1gF2QSVpSjK//+Pp20mEHtYQk0IF/NetqnPZzKZJTP9+EAQBEEQBEEQBEEQBEEQpZiWT77wLVO3EjGiuCrvjv2Fcy+rONKtZ5FbXaQGR1rUsW5Nc/inszHC+eTrVjaBFXyOCf4mCyzd6sbIkynB39xz3fr+Jxi1CY6DboW/OFa8Oru+lK1bXmqb/6l71K2S5+hyduuGBCzXIqHL2Xe7J4PmFAf+S/wwo4DTrEfdGL1VpO5YvKt6T+1uLm2CmCl6XMcXXB9shbetsil8dsnqyeAc1bCkIFsqm4QZ8n3mdlnMabd7yJRuAoo5zTvIOEw488+FI/cLsHf925zD7oVLCz1YOHFFNwQ2+SG80lGvaZ4I9k7AExBYqjvph9h2EcgfzJau1Z0fXVaECAg5iWpN80QOtU+hsiN6rFisjCtN1Eoxz0UtI9PrM0Ka2J/EVp+oZQRqNS1w+NHQLTplipfu4P5RyY3gUefNmjNRBD3qTLAWJdnP8kqtpgVAsmBK6e9HcrNul/UaBrXlVDCjvO3h+tF4fRZ0W0G3A8kx3TfBMtRddSaKILZARcKAysTWW/8d6xVeLqfRvdb8auSuSCghUW3VKlrkSmUUAnm7BY8HN/Wq5smEtxk2OVOvaQHIzs6LF/BIPZzm2PcNK/7KpYVQRmkv/T5YAFwMwyexZZvgP6mWdDZpDmneaTx30elhLYdmRrMHikVDu2r6vs6knr6Rct9S1wxm3xK5jMZiUrLf27tpl+QF01Qc/nMI0aH/Rp876qTdGqbKcKqXC+ZXTv+rRnvc48n5dlnhxnkUWVEeuwX3Y1v/m+cLxDEWcPbRc+CI3HROcOruIOr9xrPnJBee/tf7F0xSzemluPluXNyXw2i7ZcWG0ZU76O38QMpZK+ZJyz3cQb7j/sM5bWynvpTlpXbsJv0989Dqtg7zVrwIeiZVPyfwjUXCKnm+yC5uWi/iseKNOHM9MiLHJB4/4mCcXY1DDhYfP7Iwmtw+M/L403hq89G3QUS6HNvIg7ulmrKNYMiFaqGOlHcfvqKWVP8wbFooaJxWOGjWUAMO8zf1inLOHzZ68/fPXnG3crtOnSbNrPw0mtWjNzH703TTqR2f2fHnH9L2K/N36ZbRm4Wzv6XtQzmwWRw0odf+58dt9lpjJFslHOzqiTai/ifPtr2ChNniG9lvDH5jmyG03izeCmDspJItzJllFoIDDVO07x+VMCyPfDODZC/kGzzqB7J2h52W8htoPaWYxccwHaU8eQ7peYqOM8wBbUDVT84WuItWxodBoZuoraugzbc04CmGDzdZ7fMiPApd5HwaPJUrnR0/wr5Iilk+BH6VmQaMbTayPg9eHlU+7rcSQjUPOPnFNucbQEIkrXfnn1VHwIg65Yc0r2TRcY5OXTSB0ViJ9Tx0kwWnGf8A+H6JZWZ8lheZRqFtVJndO+gYKhtphkGih8TOOfyPjLJxI59WxjJrzCM9OGXzAzBhJtWLUk9fqAom10x+SkCTFmWtYhg9lDocRIdhOlVvXV4n2y0rd8yh9EiiXDKd5ZVb+ND/P1A2uUofXRypPtR0ZPvNV6LSthPJT1J+YtulwrEukxDp+3EkY81CBEEQBEEQBEEQBEEQBBHiH3FPL8/e7sPLAAAAAElFTkSuQmCC" className="rounded-full w-15 h-15 mb-1" />
            <h2 className="flex flex-row gap-1 ">
                <p>Name : </p>
                <p>{name}</p>
                </h2>
            <h4>Username : {username}</h4>
            <h4>Email : {email}</h4>
            <h4> 
                Address : {street}, {suite}, {city}
            </h4>
            <h4>Zipcode : {zipcode}</h4>
            <h4>(Lat, Lng) : ({lat}, {lng})</h4>
            <h4>Contact Number : {phone}</h4>
            <h4>Website : {website}</h4>
            <div className="flex flex-col ">
                <p className="w-1/2">Company Details:</p>
                <div className="mx-4">
                    <h4>Name : {company.name}</h4>
                    <h4>Bs : {bs}</h4>
                    <h4>CatchPhrase : {catchPhrase}</h4>
                </div>
                
            </div>
        </div>
    </div>

  )
}

export default UserCardInfo
