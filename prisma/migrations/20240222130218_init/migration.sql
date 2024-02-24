-- CreateTable
CREATE TABLE `datosAlumno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `DNI` INTEGER NOT NULL,
    `estado_Civil` VARCHAR(191) NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,
    `edad` INTEGER NOT NULL,
    `fecha_Nacimiento` DATETIME(3) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `celular` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `departamento` VARCHAR(191) NOT NULL,
    `provincia` VARCHAR(191) NOT NULL,
    `distrito` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
