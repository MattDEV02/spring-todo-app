package com.todo_app.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import javax.persistence.*;
import java.util.Date;
import com.todo_app.utils.index;


@Entity
@Table(name = "Todo")
public class Todo {
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private int id;

   @Column(name = "nome")
   private String nome;

   @Column(name = "scadenza")
   @Temporal(TemporalType.TIMESTAMP)
   @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
   private Date scadenza;

   @CreationTimestamp
   @Column(name = "created_at")
   @Temporal(TemporalType.TIMESTAMP)
   @JsonFormat(pattern = index.format)
   private Date createdAt;

   @UpdateTimestamp
   @Column(name = "updated_at")
   @Temporal(TemporalType.TIMESTAMP)
   @JsonFormat(pattern = index.format)
   private Date updatedAt;

   public Todo() {
      System.out.println("New Instance of Todo Class created.");
   }

   public int getId() { return this.id; }

   public void setId(int id) { this.id = id; }

   public String getNome() { return this.nome; }

   public void setNome(String nome) {
      this.nome = nome;
   }

   public Date getScadenza() {
      return this.scadenza;
   }

   public void setScadenza(Date scadenza) {
      this.scadenza = scadenza;
   }

   public Date getCreatedAt() { return this.createdAt; }

   public void setCreatedAt(Date created_at) { this.createdAt = created_at; }

   public Date getUpdatedAt() { return this.updatedAt; }

   public void setUpdatedAt(Date updatedAt) { this.updatedAt = updatedAt; }

   @Override
   public String toString() {
      final String pattern = "" +
              "\nNome: %s," +
              "\nScadenza: %s," +
              "\nId: %d,\nData creazione: %s," +
              "\nData aggiornamento: %s" +
              "";
      return String.format(
              pattern,
              this.nome,
              this.scadenza.toString(),
              this.id,
              this.createdAt.toString(),
              this.updatedAt.toString()
      );
   }
}