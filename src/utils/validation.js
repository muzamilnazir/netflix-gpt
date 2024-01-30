export const validation = (email,password,name)=>{
    const nameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/
    const errorMsgName = nameRegex.test(name)
    if(!errorMsgName) return "Provide a valid name"
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const errorMsgEmail = emailRegex.test(email)
    if(!errorMsgEmail) return "Email is not valid"
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const errorMsgPwd = passwordRegex.test(password)
    if(!errorMsgPwd) return "Password is not valid"
    return null

}