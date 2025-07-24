import Pendahuluan from "../screens/documentation/Pendahuluan";
import MetodeEnkripsi from "../screens/documentation/Metode Enkripsi";
import PerancanganProgram from "../screens/documentation/Perancangan Program";
import DeklarasiFungsi from "../screens/documentation/DeklarasiFungsi";
import AlgoritmaLengkap from "../screens/documentation/AlgoritmaLengkap";

export default function Documentation(){
    return`
    ${Pendahuluan()}
    ${MetodeEnkripsi()}
    ${PerancanganProgram()}
    ${DeklarasiFungsi()}
    ${AlgoritmaLengkap()}
    `
}