import { AccountModel } from "./AccountModel";
import { Repository } from "../Repositories/Repository";
import { Account} from "./AccountDto";
import { NotFoundException } from "../../exceptions/NotFoundException";
import executeTransactionAsync from "../Repositories/ExecuteTransactionAsync";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const jwtSecretKey = 'AgungFhajarFadilah';
 class AccountService {
    private AccountRepo: Repository<AccountModel>;
    
  constructor() {
    this.AccountRepo = new Repository(AccountModel);
  }
  async create(AccountRequest: Account): Promise<AccountModel> {
    let data =   await bcrypt.hash(AccountRequest.password, 10);

    const result = await executeTransactionAsync(async () => {
      const Account: Partial<AccountModel> = {
        id: uuidv4(),
        fullName: AccountRequest.fullName,
        address: AccountRequest.address,
        email: AccountRequest.email,
        phone: AccountRequest.phone,
        picture_url: AccountRequest.picture_url ?? "",
        username  : AccountRequest.username,
        password : data
      };

      return await this.AccountRepo.save(Account);
    });
    return result;
  }
  async login(AccountRequest: Account, res:any,req:any){
    try {
        const { username, password } = req.body;
    
        // Find the user in the mock database
        const user = await this.AccountRepo.find((user:any) => user.username === username);
    
        if (!user) {
          return res.status(401).json({ error: 'Invalid username or password' });
        }
    
        // Compare the entered password with the stored hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
    
        if (!passwordMatch) {
          return res.status(401).json({ error: 'Invalid username or password' });
        }
    
        // If the password is correct, generate a JWT token
        const token = jwt.sign({ username: AccountRequest.username }, jwtSecretKey, { expiresIn: '1h' });
        res.header('Authorization', `Bearer ${token}`);
    
        // Send the token in the response
        res.json({ token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
  }
}
export default  AccountService;