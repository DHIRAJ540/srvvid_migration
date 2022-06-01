let SCHT = {
    0: "92a2",
    1: "0f11",
    2: "0cf1",
    3: "6955",
    4: "7779",
    5: "e171",
    6: "0b6a",
    7: "751a",
    8: "713f",
    9: "c939",
    A: "73c5",
    B: "d832",
    C: "d6d3",
    D: "d289",
    E: "a703",
    F: "603f",
    G: "77d8",
    H: "4fc8",
    I: "85d1",
    J: "de77",
    K: "8788",
    L: "3042",
    M: "48d5",
    N: "1c41",
    O: "c396",
    P: "84f8",
    Q: "f40c",
    R: "c78e",
    S: "3494",
    T: "089f",
    U: "c19a",
    V: "a66f",
    W: "41df",
    X: "a82f",
    Y: "9723",
    Z: "b7c0",
  };


  let key =
    "541DBC699AD251F68C3C55A86C147CFD7C6D2E90BE9E170507B153560C8A65AAAFB2BB839B16F9DED96A41FE15406FEC0116BFDD7BCF7F27B827F2E047E8196DDF03E3A7C6364FD6626041CB8B8133051D969DC67E7ED6EF0944DE6A0BC96443225EE15C60AC49C17EEFA5AF3E54FECB19FD1573BF94C9D5198DB816FC814EF3";
  let enc = "";
  let i = 0;
  for (i = 0; i < key.length; i++) {
    enc += SCHT[key.slice(i, i + 1)];
  }

  const getEnc = () => enc;

  export default getEnc;