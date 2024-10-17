import os

def rename_images_in_folder():
    # Ruta a la carpeta 'fotitos', que está en la misma carpeta donde está el script
    fotitos_folder = 'fotitos'
    
    # Verifica que la carpeta 'fotitos' exista
    if not os.path.exists(fotitos_folder):
        print(f"La carpeta {fotitos_folder} no existe.")
        return
    
    # Obtén todos los archivos en la carpeta 'fotitos'
    files = os.listdir(fotitos_folder)
    
    # Filtra solo los archivos que terminen en .png
    png_files = [file for file in files if file.endswith('.jpeg')]
    
    # Renombrar cada archivo .png
    for index, file in enumerate(png_files):
        new_name = f'foto{index + 1}.png'  # Crear nuevo nombre, empezando por foto1.png
        old_file_path = os.path.join(fotitos_folder, file)
        new_file_path = os.path.join(fotitos_folder, new_name)
        
        # Renombrar archivo
        os.rename(old_file_path, new_file_path)
        print(f'Renombrado: {file} -> {new_name}')

# Llama a la función para renombrar las imágenes en la carpeta 'fotitos'
rename_images_in_folder()
