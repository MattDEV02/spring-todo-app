package com.todo_app;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import com.todo_app.utils.index;


@WebMvcTest
public class TodoAppApplicationTests {

	@Autowired
	private MockMvc mvc;

	@Test
	public void index() {
		try {
			this.mvc
					.perform(post("/"))
					.andDo(print())
					.andExpect(status().isOk());
		} catch(final Exception e) {
			index.handleException(e);
		}
	}

	@Test
	public void select() {
		try {
			this.mvc
					.perform(get("/select"))
					.andDo(print())
					.andExpect(status().isOk());
		} catch(final Exception e) {
			index.handleException(e);
		}
	}

}
