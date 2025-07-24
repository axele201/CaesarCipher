def caesar_cipher(text, shift, mode='encrypt'):
    result = ''
    if mode == 'decrypt':
        shift = -shift

    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            shifted = (ord(char) - base + shift) % 26 + base
            result += chr(shifted)
        else:
            result += char
    return result

def main():
    print("=== Program Kriptografi Caesar Cipher ===")
    text = input("Masukkan teks: ")
    mode = input("Pilih mode (encrypt/decrypt): ").strip().lower()
    shift = int(input("Masukkan jumlah pergeseran (contoh: 3): "))

    if mode not in ['encrypt', 'decrypt']:
        print("Mode tidak valid.")
        return

    output = caesar_cipher(text, shift, mode)
    print(f"Hasil ({mode}): {output}")

if __name__ == "__main__":
    main()
