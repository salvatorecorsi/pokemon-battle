import requests
import time
import os

# Lista dei link da cui scaricare i file
urls = []
url_suffix = 'https://www.models-resource.com/download'

start = 9319
end = 9325

for i in range(start, end + 1):
    urls.append(f"{url_suffix}/{i}/")

# Nome della cartella dove salvare i file (usare la directory corrente)
download_folder = os.getcwd()

# Funzione per scaricare un file
def download_file(url, folder):
    local_filename = url.split('/')[-2] + ".zip"  # Cambia il nome del file se necessario
    local_path = os.path.join(folder, local_filename)
    
    # Esegui la richiesta GET per scaricare il file
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(local_path, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    print(f"Downloaded: {local_filename}")

# Ciclo per scaricare i file con un ritardo di 100ms tra un download e l'altro
for url in urls:
    download_file(url, download_folder)
    time.sleep(0.1)  # Ritardo di 100ms

print("Tutti i file sono stati scaricati.")
