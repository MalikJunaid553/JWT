import bcrypt from "bcrypt";

const hashPassword = async (PlainPassword)=>{
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(PlainPassword , saltRounds)
    return hashedPassword;
}

const comparePassword = async (PlainPassword , hashedPassword)=>{
    return await bcrypt.compare(PlainPassword , hashedPassword)
}

export {hashPassword , comparePassword}