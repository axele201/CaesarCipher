import tkinter as tk
from tkinter import ttk
from tkinter import messagebox

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

def process_cipher():
    text = entry_text.get("1.0", tk.END).strip()
    mode = mode_var.get()
    try:
        shift = int(entry_shift.get())
    except ValueError:
        messagebox.showerror("Error", "Shift harus berupa angka.")
        return

    if mode not in ['encrypt', 'decrypt']:
        messagebox.showerror("Error", "Pilih mode encrypt atau decrypt.")
        return

    result = caesar_cipher(text, shift, mode)
    output_text.delete("1.0", tk.END)
    output_text.insert(tk.END, result)

# gui
root = tk.Tk()
root.title("Caesar Cipher GUI")
root.geometry("500x500")
root.resizable(False, False)

frame = ttk.Frame(root, padding=20)
frame.pack(fill="both", expand=True)

ttk.Label(frame, text="Teks:", font=("Helvetica", 12, "bold")).pack(anchor="w")
entry_text = tk.Text(frame, height=5, font=("Courier", 11))
entry_text.pack(fill="x")

ttk.Label(frame, text="Pergeseran:", font=("Helvetica", 12, "bold")).pack(anchor="w", pady=(10, 0))
entry_shift = ttk.Entry(frame)
entry_shift.insert(0, "3")
entry_shift.pack(fill="x")

ttk.Label(frame, text="Mode:", font=("Helvetica", 12, "bold")).pack(anchor="w", pady=(10, 0))
mode_var = tk.StringVar(value="encrypt")
ttk.Combobox(frame, textvariable=mode_var, values=["encrypt", "decrypt"], state="readonly").pack(fill="x")

ttk.Button(frame, text="Proses", command=process_cipher).pack(pady=20)

ttk.Label(frame, text="Hasil:", font=("Helvetica", 12, "bold")).pack(anchor="w")
output_text = tk.Text(frame, height=5, font=("Courier", 11), state="normal")
output_text.pack(fill="x")

root.mainloop()
