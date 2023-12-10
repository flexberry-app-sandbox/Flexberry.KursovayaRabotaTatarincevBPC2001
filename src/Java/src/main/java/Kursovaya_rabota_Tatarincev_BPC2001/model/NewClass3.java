package Kursovaya_rabota_Tatarincev_BPC2001.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_rabota_Tatarincev_BPC2001.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: NewClass3
 */
@Entity(name = "IISKursovaya_rabota_Tatarincev_BPC2001NewClass3")
@Table(schema = "public", name = "NewClass3")
public class NewClass3 {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;


    public NewClass3() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}