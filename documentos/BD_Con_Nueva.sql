-- -----------------------------------------------------
-- Table `lab1`.`Departamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lab1`.`Departamento` (
  `id` INT NOT NULL,
  `nombreDepartamento` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `departamento_UNIQUE` ON `lab1`.`Departamento` (`nombreDepartamento` ASC) VISIBLE;

-- -----------------------------------------------------
-- Table `lab1`.`Municipio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lab1`.`Municipio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `area` FLOAT NULL,
  `presupuesto` INT NULL,
  `gobernador` INT NOT NULL,
  PRIMARY KEY (`id`))
  /*CONSTRAINT `gobernador`
    FOREIGN KEY (`gobernador`)
    REFERENCES `lab1`.`Persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)*/
ENGINE = InnoDB;
CREATE UNIQUE INDEX `nombre_UNIQUE` ON `lab1`.`Municipio` (`nombre` ASC) VISIBLE;

-- -----------------------------------------------------
-- Table `lab1`.`Vivienda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lab1`.`Vivienda` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `direccion` VARCHAR(45) NOT NULL,
  `capacidad` INT NOT NULL,
  `niveles` INT NOT NULL DEFAULT 1,
  `ubicacion` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `ubicacion`
    FOREIGN KEY (`ubicacion`)
    REFERENCES `lab1`.`Municipio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
CREATE UNIQUE INDEX `id_UNIQUE` ON `lab1`.`Vivienda` (`id` ASC) VISIBLE;
CREATE INDEX `ubicacion_idx` ON `lab1`.`Vivienda` (`ubicacion` ASC) VISIBLE;

- -----------------------------------------------------
-- Table `lab1`.`Persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lab1`.`Persona` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL DEFAULT 'nn',
  `apellido` VARCHAR(45) NOT NULL DEFAULT 'nn',
  `edad` INT NOT NULL,
  `telefono` BIGINT(10) ZEROFILL NOT NULL DEFAULT 0,
  `departamento` VARCHAR(45),
  `vivienda` INT NULL,
  `cabeza_hogar` INT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `vivienda`
    FOREIGN KEY (`vivienda`)
    REFERENCES `lab1`.`Vivienda` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cdh`
    FOREIGN KEY (`cabeza_hogar`)
    REFERENCES `lab1`.`Persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `departamento`
    FOREIGN KEY (`id`)
    REFERENCES `lab1`.`Departamento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
CREATE UNIQUE INDEX `id_UNIQUE` ON `lab1`.`Persona` (`id` ASC) VISIBLE;

CREATE INDEX `vivienda_idx` ON `lab1`.`Persona` (`vivienda` ASC) VISIBLE;

CREATE INDEX `cdh_idx` ON `lab1`.`Persona` (`cabeza_hogar` ASC) VISIBLE;

CREATE INDEX `nombreDepartamento_idx` ON `lab1`.`Persona` (`departamento` ASC) VISIBLE;
-------------------------------------------------------------------------------------------
ALTER TABLE Municipio
ADD CONSTRAINT `gobernador_id` FOREIGN KEY (`gobernador`)
REFERENCES `lab1`.`Persona` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION;
-------------------------------------------------------------------------------------------
-- -----------------------------------------------------
-- Table `lab1`.`Propietario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lab1`.`Propietario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Persona_id` INT NOT NULL,
  `Vivienda_id` INT NOT NULL,
  `Departamento_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_Persona_has_Vivienda_Persona`
    FOREIGN KEY (`Persona_id`)
    REFERENCES `lab1`.`Persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Persona_has_Vivienda_Vivienda1`
    FOREIGN KEY (`Vivienda_id`)
    REFERENCES `lab1`.`Vivienda` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
CONSTRAINT `fk_Persona_has_Departamento`
    FOREIGN KEY (`id`)
    REFERENCES `lab1`.`Departamento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Persona_has_Vivienda_Vivienda1_idx` ON `lab1`.`Propietario` (`Vivienda_id` ASC) VISIBLE;
CREATE INDEX `fk_Persona_has_Vivienda_Persona_idx` ON `lab1`.`Propietario` (`Persona_id` ASC) VISIBLE;


