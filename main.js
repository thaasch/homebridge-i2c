import { open } from 'i2c-bus';

const ADDRS = [0x48, 0x49];


const i2c1 = open(1, (err) => {
  if (err) throw err;

  const readTemp = (addr) => {
    i2c1.readWord(addr, 0, (err, temp) => {
      if (err) throw err;
      console.log(temp);
    });
  };

  for (let index = 0; index < ADDRS.length; index++) {
      const element = ADDRS[index];
      readTemp(element);
  }
});